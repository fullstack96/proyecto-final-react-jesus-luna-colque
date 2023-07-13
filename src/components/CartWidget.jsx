import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button } from "@chakra-ui/react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  });

  return (
    <>
      <Button colorScheme="orange" size="md">
        <span className="material-symbols-outlined menuButton">
          shopping_cart
        </span>
        <span className="menuButton">{cartCount}</span>
      </Button>
    </>
  );
};

export default CartWidget;
