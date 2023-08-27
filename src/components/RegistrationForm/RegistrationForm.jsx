import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { register } from 'redux/auth/operations';

export const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const requiedMessage = 'Fill in this field!';
  const dispatch = useDispatch();

  const intialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(requiedMessage),
    email: yup.string().email().required(requiedMessage),
    password: yup.string().min(7).required(requiedMessage),
  });

  const handleSubmit = (userData, { resetForm }) => {
    setIsSubmitting(true);

    dispatch(register(userData))
      .then(response => {
        // if  payload isn`t a object means that a mistake happened during the http-request
        if (typeof response.payload !== 'object')
          return Notify.failure(
            'Oops! This email has alredy been registrated!'
          );

        resetForm();
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormControl as={Form} maxW="300px" margin="10% auto">
        <FormLabel htmlFor="name" m="0 0 8px 0">
          <Text fontSize="xl" mb={1}>
            Username
          </Text>
          <Input as={Field} variant="filled" type="text" name="name" />
          <ErrorMessage
            name="name"
            component={Text}
            fontSize="xs"
            color="red"
          />
        </FormLabel>
        <FormLabel htmlFor="name" m="0 0 8px 0">
          <Text fontSize="xl" mb={1}>
            Email
          </Text>
          <Input as={Field} variant="filled" type="email" name="email" />
          <ErrorMessage
            name="email"
            component={Text}
            fontSize="xs"
            color="red"
          />
        </FormLabel>
        <FormLabel htmlFor="name" m="0 0 8px 0">
          <Text fontSize="xl" mb={1}>
            Password
          </Text>
          <Input as={Field} variant="filled" type="password" name="password" />
          <ErrorMessage
            name="password"
            component={Text}
            fontSize="xs"
            color="red"
          />
        </FormLabel>
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Wait..."
          colorScheme="blue"
          variant="outline"
          w="100%"
        >
          Register
        </Button>
      </FormControl>
    </Formik>
  );
};
