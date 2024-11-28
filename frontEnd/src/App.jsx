import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import Navbar from "./components/navbar";
import { useProductStore } from "./store/product";

function App() {
  const {products}=useProductStore()

  return (
    <Box minH={"100vh"}>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
