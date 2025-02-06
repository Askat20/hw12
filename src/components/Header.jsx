import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" className="Logo">
        Alma Shop
      </Link>
      <Nav>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/orders">My Orders</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #111;
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Logo {
    margin: 0;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;

    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: #007bff;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #007bff;
    }
  }
`;
