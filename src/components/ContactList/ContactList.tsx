import { FC } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';

import { getContacts, getFilter } from '@/redux/selectors';
import { useSelector } from 'react-redux';

const ContactList: FC = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  console.log('getVisibleContacts(', getVisibleContacts());
  return (
    <ul>
      {getVisibleContacts().map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
export default ContactList;
