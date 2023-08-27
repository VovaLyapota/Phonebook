import { useDispatch } from 'react-redux';
import { FormLabel, Input, Text } from '@chakra-ui/react';
import { useContacts } from 'hooks';
import { changeFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const { filter } = useContacts();
  const dispatch = useDispatch();

  const onInput = evt => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  };

  return (
    <FormLabel htmlFor="filter" m="0 0 20px 0">
      <Text fontSize="xl" mb={1}>
        Find contacts by name
      </Text>
      <Input
        variant="filled"
        type="text"
        name="filter"
        id="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onInput}
      />
    </FormLabel>
  );
};
