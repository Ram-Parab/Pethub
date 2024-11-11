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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const params = {
      gender: searchParams.get("gender") || null,
      breed: searchParams.get("breed") || null,
      age: searchParams.get("age") || null,
      size: searchParams.get("size") || null,
    };

    console.log("Search Params:", params);
    dispatch(getAllPets({ params }));
  }, [dispatch, searchParams]);

  console.log("Redux Store Data:", data);

  return (
    <Box className="product-page">
      <Box className="sidebar">
        <Sidebar />
      </Box>
      <Box className="cardsLayout">
        {data?.length === 0 ? (
          <Box textAlign="center" fontSize="xl" fontWeight="bold" color="gray.500" p={10}>
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
