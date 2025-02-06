import React from "react";
import styled from "styled-components";

export const Orders = () => {
  const orders = [
    {
      id: 1,
      name: "iPhone 15",
      date: "2024-10-15",
      status: "Жеткирилди",
      total: "$999",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      date: "2024-09-10",
      status: "Жөнөтүлдү",
      total: "$1199",
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      date: "2024-08-25",
      status: "Жеткирилди",
      total: "$399",
    },
    {
      id: 4,
      name: "AirPods Pro (2nd generation)",
      date: "2024-07-12",
      status: "Артка кайтарылды",
      total: "$249",
    },
  ];

  return (
    <OrdersContainer>
      <OrderTitle>Менин Буйрутмаларым</OrderTitle>
      <OrdersGrid>
        {orders.map((order) => (
          <OrderCard key={order.id}>
            <h2>{order.name}</h2>
            <p>Дата: {order.date}</p>
            <Status status={order.status}>{order.status}</Status>
            <p>
              <Strong>Total: {order.total}</Strong>
            </p>
            <Button>Кененирээк маалымат</Button>
          </OrderCard>
        ))}
      </OrdersGrid>
    </OrdersContainer>
  );
};

const OrdersContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const OrderTitle = styled.h1`
  text-align: center;
  color: #007bff;
`;

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const OrderCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Status = styled.p`
  font-weight: bold;
  color: ${({ status }) =>
    status === "Жеткирилди"
      ? "green"
      : status === "Жөнөтүлдү"
      ? "blue"
      : "red"};
`;

const Button = styled.button`
  background: none;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    background: #007bff;
    color: white;
  }
`;
const Strong = styled.p`
  font-weight: bold;
`;
