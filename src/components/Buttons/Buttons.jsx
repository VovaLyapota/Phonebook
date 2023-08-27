import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const NavButton = ({ path, children }) => {
  return (
    <Button
      as={NavLink}
      to={path}
      p="14px"
      colorScheme="blue"
      variant="outline"
      _activeLink={{ bgColor: 'blue.50' }}
    >
      {children}
    </Button>
  );
};

export const ContactButton = ({
  contactId,
  callback,
  isDeleting,
  children,
}) => {
  return (
    <Button
      type="button"
      isLoading={isDeleting}
      data-contactid={contactId}
      onClick={callback}
      colorScheme="blue"
      variant="outline"
    >
      {children}
    </Button>
  );
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
};

ContactButton.propTypes = {
  contactId: PropTypes.string,
  callback: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool,
};
