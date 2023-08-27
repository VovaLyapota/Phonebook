import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { EditForm } from 'components/EditForm';

export const EditMoodal = ({ isOpen, handleClose, ...userData }) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Change your contact!</ModalHeader>

        <ModalCloseButton as="button" />

        <ModalBody>
          <EditForm handleClose={handleClose} {...userData} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

EditMoodal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
