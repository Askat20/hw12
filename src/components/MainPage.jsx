import styled from "styled-components";

const MainPage = () => {
  return (
    <MainContainer>
      <Title>Alma Shop'ко кош келиңиз!</Title>
      <Subtitle>
        Биздин дүкөндөн эң мыкты продукттарды таап алыңыз жана жаңы дүйнөнү
        ачыңыз.
      </Subtitle>
      <ImageContainer>
        <img
          src="https://alma-shop.vercel.app/apple-products.png"
          alt="Products showcase"
        />
      </ImageContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  text-align: center;
  background-color: #f5f5f7;
  padding: 50px 20px;
`;

const Title = styled.h2`
  color: #007aff;
  font-size: 2rem;
  margin-top: 20px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 10px auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  img {
    max-width: 80%;
    height: auto;
  }
`;
