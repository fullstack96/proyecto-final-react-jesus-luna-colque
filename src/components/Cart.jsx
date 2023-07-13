import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button, Center, Box, Heading } from "@chakra-ui/react";
import Swal from "sweetalert2";
import OrderId from "./OrderId";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [buyConfirm, setBuyConfirm] = useState(false);

  const refreshCart = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const showForm = () => {
    if (cart.length >= 1) {
      setBuyConfirm(true);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Cart is empty",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="prodCartContainer">
        <div className="cartHeader">
          <div className="cartBlocks">
            <div className="cartBlock">Product</div>
            <div className="cartBlock">Quantity</div>
            <div className="cartBlock">Price</div>
            <div className="cartBlock">Total</div>
            <Button
              onClick={refreshCart}
              colorScheme="orange"
              color="black"
              size="xs"
            >
              <span className="material-symbols-outlined">refresh</span>
            </Button>
          </div>
          {cart.map((prod) => (
            <div key={prod.id} className="cartItems">
              <div className="cartBlock">{prod.name}</div>

              <div className="cartBlock">{prod.quantity}</div>

              <div className="cartBlock">U$D{prod.price}</div>

              <div className="cartBlock">U$D{prod.price * prod.quantity}</div>

              <Button
                onClick={() => deleteItem(prod.id)}
                colorScheme="red"
                color="black"
                size="xs"
              >
                <span className="material-symbols-outlined">delete</span>
              </Button>
            </div>
          ))}
        </div>
        <Center>
          <Box className="cartFooter" m={5}>
            <Heading size="md">
              Total: U$D {cart.reduce((a, b) => a + b.price * b.quantity, 0)}
            </Heading>
            <Box m={5}>
              <Button onClick={showForm} colorScheme="orange" color="black">
                Confirm
              </Button>
            </Box>
          </Box>
        </Center>
        {buyConfirm ? (
          <div className="formContainer">
            <OrderId cart={cart} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
