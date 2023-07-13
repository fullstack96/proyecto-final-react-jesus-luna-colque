import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div>
      <Center height={600}>
        <Spinner size="lg" />
      </Center>
    </div>
  );
};

export default Loading;
