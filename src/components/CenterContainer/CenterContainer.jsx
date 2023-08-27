import PropTypes from 'prop-types';
import { Center } from '@chakra-ui/react';

export const CenterContainer = ({
  flexDirection = 'row',
  justifyContent = 'flex-start',
  children,
}) => {
  return (
    <Center
      p="0 15px"
      m="0 auto"
      maxW="1440px"
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems="flex-start"
    >
      {children}
    </Center>
  );
};

CenterContainer.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
};
