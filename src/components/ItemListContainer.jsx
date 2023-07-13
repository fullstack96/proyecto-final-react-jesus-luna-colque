import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
  const { category } = useParams();

  const [loading, setloading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "sillones");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
    });
    setloading(false);
  }, []);

  const catFilter = products.filter(
    (products) => products.category === category
  );

  if (loading)
    return (
      <div className="loadingContainer">
        <Loading />
      </div>
    );
  return (
    <>
      {category ? (
        <ItemList products={catFilter} />
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
