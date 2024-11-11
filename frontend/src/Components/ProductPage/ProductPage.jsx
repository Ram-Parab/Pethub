import { styled } from "styled-components";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets } from "../../Redux/Pets/action";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.petData.data);

  let obj = {
    params: {
      gender: searchParams.get("gender"),
      breed: searchParams.get("breed"),
      age: searchParams.get("age"),
      size: searchParams.get("size"),
    },
  };
// console.log(obj.params.breed)
  useEffect(() => {
    dispatch(getAllPets(obj));
  }, [searchParams]);

  return (
    <DIV>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="cardsLayout">
        {data.length===0 ? <p style={{textAlign:"center",fontSize:"30px",fontWeight:"800"}}>Data Not Found!!</p>:null}
        {data.map((el, i) => {
          return <Card key={el._id} data={el} />;
        })}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  margin-top:100px;
  //justify-content: space-evenly;
  background-color: #f3f3f3;

  .sidebar {
    background: white;
    width: 25%;
    padding:50px;
  }
 
  .cardsLayout {
    width: 69%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: 800px) {
    .cardsLayout {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    }
  }

  @media (max-width: 650px) {
    .cardsLayout {
    width: 57%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    }
    .sidebar {
    background: white;
    width: 40%;
    padding:30px;
  }
  }
`;

export default ProductPage;
