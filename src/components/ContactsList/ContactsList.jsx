import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const contactsListEmpty = contacts.length === 0;
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  if (contactsListEmpty) {
    return <Notification title="Contacts list is empty" />;
  }
  if (!contactsListEmpty && filteredContacts.length === 0) {
    return <Notification title="No contact with such name found" />;
  }

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteClick: PropTypes.func.isRequired,
};
