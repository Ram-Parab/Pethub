import { Box } from "@chakra-ui/react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets } from "../../Redux/Pets/action";
import { useSearchParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((store) => store.petData);

  useEffect(() => {
    // Create params object
    const params = {
      gender: searchParams.get("gender") || null,
      breed: searchParams.get("breed") || null,
      age: searchParams.get("age") || null,
      size: searchParams.get("size") || null,
    };

    // Log the params to verify they're correct
    console.log("Search Params:", params);

    // Dispatch the action
    dispatch(getAllPets({ params }));
  }, [dispatch, searchParams]);

  // Log the data to verify it's being received
  console.log("Redux Store Data:", data);

  return (
    <Box className="product-page">
      <Box className="sidebar">
        <Sidebar />
      </Box>
      <Box className="cardsLayout">
        {data?.length === 0 ? (
          <Box
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
            color="gray.500"
            p={10}
          >
            No pets found matching your criteria
          </Box>
        ) : (
          data?.map((el) => <Card key={el._id} data={el} />)
        )}
      </Box>
    </Box>
  );
};

export default ProductPage;
