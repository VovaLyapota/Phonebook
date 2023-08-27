import { Flex } from '@chakra-ui/react';
import {
  BsHouseDoorFill,
  BsFillPersonPlusFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { NavButton } from 'components/Buttons';
import { getViewportWidth } from 'utils/commonFunctions';

export const LogMenu = () => {
  const shouldChangeButtons = getViewportWidth() > 620;

  return (
    <>
      <Flex marginRight="auto">
        <NavButton path="/">
          {/* 620px is breaking point for my pet project */}
          {shouldChangeButtons ? 'Home' : <BsHouseDoorFill />}
        </NavButton>
      </Flex>

      <Flex as="nav" gap="10px">
        <NavButton path="login">
          {shouldChangeButtons ? 'Log in' : <BsFillPersonFill />}
        </NavButton>

        <NavButton path="register">
          {shouldChangeButtons ? 'Register' : <BsFillPersonPlusFill />}
        </NavButton>
      </Flex>
    </>
  );
};
