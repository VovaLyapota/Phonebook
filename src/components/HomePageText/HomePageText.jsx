import { Heading, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import { UserText } from './UserText';
import { CommonText } from './CommonText';

export const HomePageText = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Heading
        as="h1"
        color="blue.500"
        size="xl"
        m="0 auto 16px "
        textAlign="center"
      >
        Hi! This is your homepage.
      </Heading>
      {isLoggedIn ? <UserText /> : <CommonText />}
      <Text
        color="blue.600"
        textAlign="center"
        m="auto"
        maxW="300px"
        opacity="0.4"
        userSelect="none"
      >
        This is a pet project for my portfolio, I`m not a designer but I was
        trying!
      </Text>
    </>
  );
};
