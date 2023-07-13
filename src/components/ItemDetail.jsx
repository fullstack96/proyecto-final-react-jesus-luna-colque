import { useParams, Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const prodFilter = products.filter((prod) => prod.id == id);
  return (
    <>
      {prodFilter.map((prod) => (
        <div key={prod.id} className="itemContainer">
          <Card maxW="sm">
            <Center padding={3}>
              <Link to={"/catalogue"}>
                <ArrowBackIcon boxSize={6} color="red" />
              </Link>
            </Center>
            <CardBody>
              <Image src={prod.img} alt="Sofa" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{prod.name}</Heading>
                <Text>{prod.description}</Text>
                <Text color="blue.300" fontSize="2xl">
                  U$D {prod.price}
                </Text>
                <Text>Stock: {prod.stock}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2" className="footerButtons">
                <ItemCount
                  id={prod.id}
                  name={prod.name}
                  price={prod.price}
                  stock={prod.stock}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
