import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
 
  SimpleGrid,
 
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";

const HomePage = () => {

  const{ fetchProduct, products} =useProductStore();

  useEffect(()=>{
    fetchProduct()
  },[fetchProduct])
  console.log(products,"products")
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

        <SimpleGrid
         column={{
          base:1,
          md:2,
          lg:3
         }}
         spacing={10}
         w={"full"}
        > 

        </SimpleGrid>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight={"bold"}
          color="gray.500"
        >
          No product found
          <Link to={"/create"}>
          <Text  color='blue.500' _hover={{textDecoration:"underline"}}>
            Create Product
          </Text>
          
          
          
          </Link>

        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
