import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [loading, setloading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "sillones");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProducts(docs);
    });
    setloading(false);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      <div className="itemList">
        <ItemDetail products={products} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
