import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="itemList">
        {products.map((prod) => (
          <Item
            key={prod.id}
            id={prod.id}
            name={prod.name}
            stock={prod.stock}
            category={prod.category}
            img={prod.img}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
