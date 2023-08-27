import { Flex } from '@chakra-ui/react';
import { CenterContainer } from 'components/CenterContainer';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { getViewportWidth } from 'utils/commonFunctions';

const Contacts = () => {
  const shouldChangeDisplaySettings = getViewportWidth() <= 620;

  return (
    <CenterContainer
      flexDirection={shouldChangeDisplaySettings ? 'column' : 'row'}
    >
      <Flex
        flexDirection="column"
        w={shouldChangeDisplaySettings ? '100%' : '300px'}
        mr={shouldChangeDisplaySettings ? '0px' : '20px'}
      >
        <ContactForm />
        <Filter />
      </Flex>

      <ContactList />
    </CenterContainer>
  );
};

export default Contacts;
