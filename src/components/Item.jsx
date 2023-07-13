import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardFooter,
} from "@chakra-ui/react";

const Item = ({ id, name, stock, category, img }) => {
  return (
    <>
      <div key={id} className="itemContainer">
        <Card maxW="sm">
          <CardBody>
            <Link to={`/item/${id}`}>
              <Image src={img} alt="Sofa" className="imgHover" />
            </Link>
            <Stack spacing="3" mt="4">
              <Heading size="md">{name}</Heading>
              <Text fontSize="lg">Category: {category}</Text>
              <Text color="blue.300" fontSize="2xl">
                Stock: {stock}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="orange">
                Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Item;
