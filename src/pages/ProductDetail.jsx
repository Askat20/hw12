import React from "react";
import { useParams, Link } from "react-router-dom";
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

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <NotFoundMessage>Товар не найден!</NotFoundMessage>;
  }

  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </Container>
  );
};

export default ProductDetails;

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: darkblue;
  }
`;

const NotFoundMessage = styled.h2`
  text-align: center;
  margin-top: 50px;
  color: red;
`;
