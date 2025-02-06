import styled from "styled-components";

export const About = () => {
  return (
    <Container>
      <Title>Биз жөнүндө</Title>
      <Paragraph>
        <Strong>Alma Shop</Strong> - Кыргызстандагы алдынкы технология
        платформасы, Apple компаниясынын бардык популярдуу продукцияларын
        сатууга адистешкен.
      </Paragraph>
      <Paragraph>
        Компаниябыздын негизги принциптери - сапат, ишенимдүүлүк жана кардарлар
        менен узак мөөнөттүү кызматташтык.
      </Paragraph>
      <Title>Биздин максаттар:</Title>
      <List>
        <ListItem>
          <Strong>
            <a href="#">Ишене ала турган сапат</a>
          </Strong>{" "}
          - Биз Apple компаниясынын эң акыркы жана популярдуу өнүмдөрүн
          сунуштайбыз.
        </ListItem>
        <ListItem>
          <Strong>
            <a href="#">Жогорку деңгээлде тейлөө</a>
          </Strong>{" "}
          - Кардарларды канааттандыруу үчүн эң жогорку деңгээлде кызмат
          көрсөтүүгө аракет кылабыз.
        </ListItem>
        <ListItem>
          <Strong>
            <a href="#">Икономикалык жеткиликтүүлүк</a>
          </Strong>{" "}
          - Инновациялык технологияларды арзан баада сунуштайбыз.
        </ListItem>
        <ListItem>
          <Strong>
            <a href="#">Технологиялык жаңылануу</a>
          </Strong>{" "}
          - Дүйнө жүзү боюнча эң мыкты техникаларды алып келүүнү максат кылабыз.
        </ListItem>
      </List>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #007bff;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  & a {
    color: #007bff;
    text-decoration: none;
  }
`;
