import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { Flex } from '@chakra-ui/react';
import { ContactButton } from 'components/Buttons';
import { EditMoodal } from 'components/EditModal';
import { deleteContact } from 'redux/contacts/operations';
import { copy } from 'utils/commonFunctions';

export const DecktopMenu = ({ contactName, contactNumber, contactId }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleEditor = () => {
    setIsEditing(prevIsEditing => !prevIsEditing);
  };

  const handleDelete = evt => {
    setIsDeleting(true);

    const { contactid } = evt.target.dataset;

    dispatch(deleteContact(contactid))
      .then(response => {
        // if  payload isn`t a object means that a mistake happened during the http-request
        if (typeof response.payload !== 'object')
          Notify.failure(
            'Oops! Sorry, but something was wrong, please try again'
          );
      })
      .finally(() => setIsDeleting(false));
  };

  return (
    <Flex gap="14px">
      <ContactButton callback={() => copy(contactNumber, 'Number was copied!')}>
        Copy
      </ContactButton>
      <ContactButton callback={toggleEditor}>
        Edit
        <EditMoodal
          isOpen={isEditing}
          handleClose={toggleEditor}
          initialName={contactName}
          initialNumber={contactNumber}
          id={contactId}
        />
      </ContactButton>
      <ContactButton
        callback={handleDelete}
        contactId={contactId}
        isDeleting={isDeleting}
      >
        Delete
      </ContactButton>
    </Flex>
  );
};

DecktopMenu.propTypes = {
  contactNumber: PropTypes.string.isRequired,
};
