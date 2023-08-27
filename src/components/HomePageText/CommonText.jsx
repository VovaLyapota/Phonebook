import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const CommonText = () => {
  return (
    <Text color="blue.500" textAlign="center" m="auto" maxW="300px">
      To use this app you should to{' '}
      <Link to="/login">
        <Text as="ins" _hover={{ color: 'blue.300' }} cursor="pointer">
          log in
        </Text>
      </Link>{' '}
      or{' '}
      <Link to="/register">
        <Text as="ins" _hover={{ color: 'blue.300' }} cursor="pointer">
          register
        </Text>
      </Link>
      .
    </Text>
  );
};
