import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { editContact } from 'redux/contacts/operations';
import { checkTheSameNames } from 'utils/commonFunctions';
import { useContacts } from 'hooks';

export const EditForm = ({ initialName, initialNumber, id, handleClose }) => {
  const [isSubmittingChanges, setIsSubmittingChanges] = useState(false);
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const intialValues = {
    name: initialName,
    number: initialNumber,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Fill in this field!'),
    number: yup.string().required('Fill in this field!'),
  });

  const handleSubmit = ({ name, number }) => {
    if (name === initialName && number === initialNumber)
      return Notify.info('There is no changes!');
    if (checkTheSameNames(contacts, name))
      return Notify.info(
        `${name} is alredy in contacts, maybe you were mistaken?`,
        { width: '400px' }
      );

    setIsSubmittingChanges(true);

    dispatch(editContact({ name, number, id })).finally(() =>
      setIsSubmittingChanges(false)
    );

    handleClose();
  };

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormControl as={Form} mb="32px" display="flex" flexDirection="column">
        <FormLabel htmlFor="name" m="0 0 8px 0">
          <Text fontSize="xl" mb={1}>
            Name
          </Text>
          <Input as={Field} variant="filled" type="text" name="name" />
          <ErrorMessage
            name="name"
            component={Text}
            fontSize="xs"
            color="red"
          />
        </FormLabel>
        <FormLabel htmlFor="number" m="0 0 8px 0">
          <Text fontSize="xl" mb={1}>
            Number
          </Text>

          <Input as={Field} variant="filled" type="tel" name="number" />
          <ErrorMessage
            name="number"
            component={Text}
            fontSize="xs"
            color="red"
          />
        </FormLabel>
        <Box ml="auto">
          <Button
            type="button"
            colorScheme="blue"
            variant="outline"
            mr={3}
            onClick={handleClose}
            ml="auto"
          >
            Close
          </Button>
          <Button
            type="submit"
            rightIcon={<EditIcon />}
            isLoading={isSubmittingChanges}
            loadingText="Editing..."
            colorScheme="blue"
            variant="outline"
          >
            Edit contact
          </Button>
        </Box>
      </FormControl>
    </Formik>
  );
};

EditForm.propTypes = {
  initialName: PropTypes.string.isRequired,
  initialNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
