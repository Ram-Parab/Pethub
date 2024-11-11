import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components"

const SingleProductPage = () => {
    const { id } = useParams()
    const data = useSelector((store) => store.petData.data);
    var singleProduct = data.find(ele => ele._id === id)
    console.log(singleProduct)

    return <DIV>
        {singleProduct &&
            <div className="singlePage">
                <div className="single-img">
                    <img src={singleProduct.image} alt="Puppyimage" />
                </div>
                <div className="single-details">
                    <h1>Name:{singleProduct.name}</h1>
                    <h3>Breed:{singleProduct.breed}</h3>
                    <h3>Age:{singleProduct.age}</h3>
                    <p>Gender:{singleProduct.gender}</p>
                    <p>Size:{singleProduct.size}</p>
                </div>
            </div>
        }


    </DIV>
}

const DIV = styled.div`
    .singlePage{
        display:flex;
        justify-content: space-evenly;
        margin:50px;
        margin-top:120px;
        padding:50px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border-radius:10px;
    }
    .single-img{
        width:50%;
    }
    .single-img img{
        width:100%;
        height:600px;
        border-radius: 20px;
    }
    .single-details{
        border:1px solid gray;
        width:50%;
        height:600px;
        padding:50px;
        border-radius: 20px;
        text-align: left;
        line-height: 80px;
    }
    .single-details h1{
        font-size: 40px;
        font-weight: 800;
    }
    .single-details h3{
       
        font-size: 25px;
        font-weight: 700;
    }
    .single-details p{
        
        font-size: 18px;
        font-weight:200;
    }
    @media (max-width: 768px) { 
        .singlePage{
            display: flex;
            flex-direction: column;
        }
        .single-img{
        width:100%;
    }
        .single-img img{
        width:100%;
        height:600px;
        border-radius: 20px;
    }
    .single-details{
        border:1px solid gray;
        width:100%;
        height:600px;
        padding:50px;
        border-radius: 20px;
        text-align: left;
        line-height: 80px;
    }
    }

    @media (max-width: 600px) { 
        .singlePage{
            display: flex;
            flex-direction: column;
            padding:0px;
        }
    }
`;

export default SingleProductPage;