import { Button, ButtonProps, Flex } from "@chakra-ui/react";

export default function Btn(props: ButtonProps) {
  return (
    <Flex h="100%" w="100%">
      <Button
        {...props}
        /* flex={1} */
        px={10}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        Read Now
      </Button>
    </Flex>
  );
}
