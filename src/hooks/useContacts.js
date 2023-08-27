import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  return {
    contacts,
    isLoading,
    error,
    filter,
  };
};
