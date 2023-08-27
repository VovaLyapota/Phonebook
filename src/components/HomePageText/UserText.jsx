import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { logOut } from 'redux/auth/operations';

export const UserText = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Text color="blue.500" textAlign="center" m="auto" maxW="300px">
      You can go to your{' '}
      <Link to="/contacts">
        <Text as="ins" _hover={{ color: 'blue.300' }} cursor="pointer">
          contacts
        </Text>
      </Link>{' '}
      or{' '}
      <Text
        as="ins"
        _hover={{ color: 'blue.300' }}
        onClick={handleLogOut}
        cursor="pointer"
      >
        log out
      </Text>
      .
    </Text>
  );
};
