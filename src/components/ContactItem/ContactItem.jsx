import PropTypes from 'prop-types';
import { ListItem, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { ContactItemControl } from 'components/ContactItemControl';

export const ContactItem = ({ id, name, number }) => {
  return (
    <Card as={ListItem} key={id} variant="outline">
      <CardBody
        as={Flex}
        justifyContent="space-between"
        alignItems="center"
        p="8px"
      >
        <Text
          fontSize="2xl"
          overflow="hidden"
          style={{ textWrap: 'nowrap' }}
          textOverflow="ellipsis"
          maxW="calc(100% - 8px * 2 - 50px)"
          mr="6px"
        >
          {name} : {number}
        </Text>
        <ContactItemControl
          contactName={name}
          contactNumber={number}
          contactId={id}
        />
      </CardBody>
    </Card>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
