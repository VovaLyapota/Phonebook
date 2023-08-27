import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useContacts } from 'hooks';
import { addContact } from 'redux/contacts/operations';
import { checkTheSameNames } from 'utils/commonFunctions';

export const ContactForm = () => {
  const [isAdding, setIsAdding] = useState(false);
  const { contacts } = useContacts();
  const requiedMessage = 'Fill in this field!';
  const dispatch = useDispatch();

  const intialValues = {
    name: '',
    number: '',
  };
  const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(requiedMessage),
    number: yup.string().required(requiedMessage),
  });

  const handleSubmit = (newContact, { resetForm }) => {
    if (checkTheSameNames(contacts, newContact.name))
      return Notify.info(
        `${newContact.name} is alredy in contacts, maybe you were mistaken?`,
        { width: '400px' }
      );

    setIsAdding(true);
    dispatch(addContact(newContact)).finally(() => setIsAdding(false));
    resetForm();
  };

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormControl as={Form} mb="10px">
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
        <Button
          type="submit"
          rightIcon={<AddIcon />}
          isLoading={isAdding && contacts.length > 0}
          loadingText="Adding..."
          colorScheme="blue"
          variant="outline"
        >
          Add contact
        </Button>
      </FormControl>
    </Formik>
  );
};
