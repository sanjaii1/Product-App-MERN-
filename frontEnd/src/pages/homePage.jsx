import React, { useEffect } from "react";
import {
  Container,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  console.log(products, "products");
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
          column={3}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight={"bold"}
          color="gray.500"
        >
          No product found
          <Link to={"/create"}>
            <Text color="blue.500" _hover={{ textDecoration: "underline" }}>
              Create Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
