import { Container } from '@chakra-ui/react';
import { CenterContainer } from 'components/CenterContainer';
import { HomePageText } from 'components/HomePageText';

const HomePage = () => {
  return (
    <CenterContainer>
      <Container p="0" justifyContent="center" alignItems="center">
        <HomePageText />
      </Container>
    </CenterContainer>
  );
};

export default HomePage;
