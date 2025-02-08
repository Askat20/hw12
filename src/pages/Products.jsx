// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import iphone15 from "../assets/images/iphone15.png";
// import macbookAir from "../assets/images/macbook-air-m2.png";
// import appleWatch from "../assets/images/apple-watch-series-9.png";
// import airpodsPro from "../assets/images/airpods-pro-2.png";

// const products = [
//   {
//     id: 1,
//     name: "iPhone 15",
//     description: "The latest iPhone with cutting-edge features.",
//     price: "$999",
//     image: iphone15,
//   },
//   {
//     id: 2,
//     name: "MacBook Air M2",
//     description: "Lightweight, powerful, and fast laptop with Apple's M2 chip.",
//     price: "$1199",
//     image: macbookAir,
//   },
//   {
//     id: 3,
//     name: "Apple Watch Series 9",
//     description: "The most advanced Apple Watch yet, with new health features.",
//     price: "$399",
//     image: appleWatch,
//   },
//   {
//     id: 4,
//     name: "AirPods Pro (2nd generation)",
//     description: "Noise-cancelling earbuds with excellent sound quality.",
//     price: "$249",
//     image: airpodsPro,
//   },
// ];

// const Products = () => {
//   return (
//     <ProductsContainer>
//       <Title>Сатыктагы товарлар</Title>
//       <ProductsGrid>
//         {products.map((product) => (
//           <ProductCard key={product.id}>
//             <ProductImage src={product.image} alt={product.name} />
//             <ProductName>{product.name}</ProductName>
//             <ProductDescription>{product.description}</ProductDescription>
//             <ProductPrice>{product.price}</ProductPrice>
//             <ButtonContainer>
//               <StyledLink to={`/product/${product.id}`}>Подробнее</StyledLink>
//               <Button>Заказать</Button>
//             </ButtonContainer>
//           </ProductCard>
//         ))}
//       </ProductsGrid>
//     </ProductsContainer>
//   );
// };

// export default Products;

// const ProductsContainer = styled.div`
//   max-width: 1200px;
//   margin: 40px auto;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   text-align: center;
// `;

// const Title = styled.h1`
//   text-align: center;
//   color: #007bff;
//   font-size: 32px;
//   font-weight: bold;
// `;

// const ProductsGrid = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   flex-wrap: wrap;
// `;

// const ProductCard = styled.div`
//   background: white;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   width: 300px;
// `;

// const ProductImage = styled.img`
//   width: 90px;
//   height: 90px;
//   margin-bottom: 10px;
// `;

// const ProductName = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 5px 0;
// `;

// const ProductDescription = styled.p`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 10px;
// `;

// const ProductPrice = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   color: #007bff;
//   margin-bottom: 10px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   width: 100%;
// `;

// const Button = styled.button`
//   flex: 1;
//   border: 1px solid #007bff;
//   background: white;
//   color: #007bff;
//   padding: 8px;
//   font-size: 14px;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;

//   &:hover {
//     background: #007bff;
//     color: white;
//   }
// `;

// const StyledLink = styled(Link)`
//   flex: 1;
//   text-align: center;
//   border: 1px solid #007bff;
//   background: white;
//   color: #007bff;
//   padding: 8px;
//   font-size: 14px;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background: #007bff;
//     color: white;
//   }
// `;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iphone15 from "../assets/images/iphone15.png";
import macbookAir from "../assets/images/macbook-air-m2.png";
import appleWatch from "../assets/images/apple-watch-series-9.png";
import airpodsPro from "../assets/images/airpods-pro-2.png";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    description: "The latest iPhone.",
    price: "$999",
    image: iphone15,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "Powerful laptop with M2 chip.",
    price: "$1199",
    image: macbookAir,
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    description: "Advanced health features.",
    price: "$399",
    image: appleWatch,
  },
  {
    id: 4,
    name: "AirPods Pro (2nd generation)",
    description: "Great sound quality.",
    price: "$249",
    image: airpodsPro,
  },
];

const Products = () => {
  return (
    <ProductsContainer>
      <Title>Сатыктагы товарлар</Title>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
            <ButtonContainer>
              <Link to={`/product/${product.id}`}>
                <Button>Подробнее</Button>
              </Link>
              <Button primary>Заказать</Button>
            </ButtonContainer>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;

// Styled Components
const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #007bff;
  font-size: 32px;
  font-weight: bold;
`;

const ProductsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  border: 1px solid #007bff;
  background: ${(props) => (props.primary ? "#007bff" : "white")};
  color: ${(props) => (props.primary ? "white" : "#007bff")};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: ${(props) => (props.primary ? "darkblue" : "#007bff")};
    color: white;
  }
`;
