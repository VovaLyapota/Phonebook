import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { EditMoodal } from 'components/EditModal';
import { deleteContact } from 'redux/contacts/operations';
import { copy } from 'utils/commonFunctions';
import { CopyIcon, DeleteIcon, EditIcon, SettingsIcon } from '@chakra-ui/icons';

export const BurgerMenu = ({ contactName, contactNumber, contactId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleEditor = () => setIsEditing(prevIsEditing => !prevIsEditing);

  const handleDelete = evt => {
    const { contactid } = evt.target.dataset;
    dispatch(deleteContact(contactid)).then(response => {
      // if  payload isn`t a object means that a mistake happened during the http-request
      if (typeof response.payload !== 'object')
        Notify.failure(
          'Oops! Sorry, but something was wrong, please try again'
        );
    });
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<SettingsIcon />}
        variant="outline"
        colorScheme="blue"
      />
      <MenuList>
        <MenuItem
          icon={<CopyIcon />}
          onClick={() => copy(contactNumber, 'Number was copied!')}
        >
          Copy
        </MenuItem>
        <MenuItem icon={<EditIcon />} onClick={toggleEditor}>
          Edit
          <EditMoodal
            isOpen={isEditing}
            handleClose={toggleEditor}
            initialName={contactName}
            initialNumber={contactNumber}
            id={contactId}
          />
        </MenuItem>

        <MenuItem
          icon={<DeleteIcon />}
          data-contactid={contactId}
          onClick={handleDelete}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

BurgerMenu.propTypes = {
  contactNumber: PropTypes.string.isRequired,
};
