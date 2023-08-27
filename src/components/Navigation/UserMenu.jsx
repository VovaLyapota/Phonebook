import { useDispatch } from 'react-redux';
import { Button, Flex, Text } from '@chakra-ui/react';
import {
  BsFillPersonFill,
  BsHouseDoorFill,
  BsFillTelephoneFill,
  BsXLg,
} from 'react-icons/bs';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { copy, getViewportWidth } from 'utils/commonFunctions';
import { NavButton } from 'components/Buttons';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const userName = useAuth().user.name;
  // 620px is breaking point for my pet project
  const shouldChangeButtons = getViewportWidth() > 620;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <>
      <Flex as="nav" gap="10px" marginRight="auto">
        <NavButton path="/">
          {shouldChangeButtons ? 'Home' : <BsHouseDoorFill />}
        </NavButton>

        <NavButton path="contacts">
          {shouldChangeButtons ? 'Contacts' : <BsFillTelephoneFill />}
        </NavButton>
      </Flex>

      <Flex gap="10px" alignItems="center">
        <Text
          fontSize="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="4px"
          p="4px 8px"
          minW="45.6px"
          minH="40px"
          border="gray 1px solid"
          borderRadius="md"
          cursor="copy"
          onClick={() => copy(userName, 'Your name was copied!')}
        >
          <BsFillPersonFill />
          {shouldChangeButtons && userName}
        </Text>
        <Button
          colorScheme="blue"
          p="12px"
          variant="outline"
          minW="45.6px"
          onClick={handleLogOut}
        >
          {shouldChangeButtons ? 'Log out' : <BsXLg />}
        </Button>
      </Flex>
    </>
  );
};
