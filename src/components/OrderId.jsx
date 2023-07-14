import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const OrderId = () => {
  const { cart, setCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");

  const db = getFirestore();

  const ordersCollection = collection(db, "order");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    setCart([]);
  };

  const order = {
    name,
    surname,
    email,
    phone,
    adress,
    city,
    cart,
  };

  return (
    <>
      <div className="orderItems">
        <div className="orderMessagge  animate__animated animate__fadeIn">
          <Heading size="xl">
            <span className="altWord">Thank</span> you for your purchase!
          </Heading>
          <p className="textP">
            Thank you for your purchase from{" "}
            <span className="altWord">UFurniture</span>! We're thrilled that
            you've chosen our furniture to beautify your home. To ensure smooth
            delivery and excellent customer service, we need some additional
            details from you.
          </p>
          <p className="textP">
            You'll be asked to provide{" "}
            <span className="altWord">your personal information</span> below so
            we can generate an order <span className="altWord">ID</span> and our
            sales representatives can contact you if needed. The details we
            require include your full name, email address, phone number, and
            shipping address. This information will help us track your order and
            ensure it's delivered to the correct address.
          </p>
          <p className="textP">
            Don't worry,{" "}
            <span className="altWord">
              we protect your privacy and the information you provide will be
              kept confidential.
            </span>{" "}
            It will only be shared with our delivery and customer service teams
            to ensure a seamless and hassle-free shopping experience.
          </p>
          <p className="textP">
            <TriangleDownIcon />
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="animate__animated animate__fadeIn"
        >
          <FormControl isRequired width="100%">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Jesus"
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Surname</FormLabel>
            <Input
              type="text"
              placeholder="Luna"
              onChange={(e) => setSurname(e.target.value)}
            />
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              placeholder="jesus@luna.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              placeholder="1133432573"
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormLabel>Adress</FormLabel>
            <Input
              type="text"
              placeholder="Street 123"
              onChange={(e) => setAdress(e.target.value)}
            />
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Buenos Aires"
              onChange={(e) => setCity(e.target.value)}
            />
            <Box my={3} textAlign="center">
              <Button type="submit" colorScheme="orange">
                Submit
              </Button>

              <Box m={3}>
                <Heading size="md">Generate your order ID on confirm</Heading>
                <Text as="i">(Save this ID, it will make things easier!)</Text>:
                <Heading size="md"> {orderId} </Heading>
              </Box>
            </Box>
          </FormControl>
        </form>
      </div>
    </>
  );
};

export default OrderId;
