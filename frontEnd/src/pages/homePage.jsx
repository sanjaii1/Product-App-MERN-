import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
 
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,cyan.400, blue.500"}
          textAlign={"center"}
        >
          Current Product
        </Text>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight={"bold"}
          color="gray.500"
        >
          No product found
          <Link to={"/create"}>
          <Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>
            Create Product
          </Text>
          
          
          
          </Link>

        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
