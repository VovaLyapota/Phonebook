import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Heading, List } from '@chakra-ui/react';
import { useAuth, useContacts } from 'hooks';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactItem } from 'components/ContactItem';
import { Loader } from 'components/Loaders';

export const ContactList = () => {
  const { isLoggedIn } = useAuth();
  const { contacts, isLoading, error, filter } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts());
  }, [isLoggedIn, dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const shouldShowLoader = isLoading && !error && contacts.length === 0;

  return (
    <>
      <Box
        padding="5% calc(50% - 24px)"
        display={shouldShowLoader ? 'block' : 'none'}
      >
        <Loader />
      </Box>

      {contacts.length === 0 && !shouldShowLoader ? (
        <Box margin="auto" width="100%" textAlign="center">
          <Heading color="blue.600">Add your first contact!</Heading>
        </Box>
      ) : (
        <List w="100%" display="flex" flexDirection="column" gap="16px">
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </>
  );
};
