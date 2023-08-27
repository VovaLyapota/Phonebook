import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const requiedMessage = 'Fill in this field!';
  const dispatch = useDispatch();

  const intialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(requiedMessage),
    password: yup.string().min(7).required(requiedMessage),
  });

  const handleSubmit = (userData, { resetForm }) => {
    setIsSubmitting(true);

    dispatch(logIn(userData))
      .then(response => {
        // if  payload isn`t a object means that a mistake happened during the http-request
        if (typeof response.payload !== 'object')
          return Notify.failure(
            'Oops! Something is wrong, please try again :('
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
        <FormLabel htmlFor="email" m="0 0 8px 0">
          <Text fontSize="xl" mb={1}>
            Email
          </Text>

          <Input as={Field} variant="filled" type="text" name="email" />
          <ErrorMessage
            name="email"
            component={Text}
            fontSize="xs"
            color="red"
          />
        </FormLabel>
        <FormLabel htmlFor="password" m="0 0 8px 0">
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
          Log in
        </Button>
      </FormControl>
    </Formik>
  );
};
