import { useState, useContext } from "react";
import { Button, Box } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import Swal from "sweetalert2";

const ItemCount = ({ id, name, price, stock }) => {
  const { setCart } = useContext(CartContext);
  let [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Can`t add more than stock",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Can`t be less than 1",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const reset = () => {
    setCount((count = 1));
  };

  const addToCart = () => {
    setCart((items) => {
      const isInCart = items.some((item) => item.id === id);
      if (isInCart) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...items, { id, price, name, quantity: count }];
      }
    });
  };
  return (
    <>
      <Button onClick={restar} color="red">
        -
      </Button>
      <Box className="countLabel">{count.toString()}</Box>
      <Button onClick={sumar} color="green">
        +
      </Button>
      <Button onClick={reset} colorScheme="orange">
        Reset
      </Button>
      <Button onClick={() => addToCart()} colorScheme="orange">
        Add
      </Button>
    </>
  );
};

export default ItemCount;
