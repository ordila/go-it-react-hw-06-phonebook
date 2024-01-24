import { FC, useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ContactSingle } from './ContactForm/ContactForm.types';

import { localStorageService } from '../helpers/storage/storage.helpers';
import { LOCAL_STORAGE_KEYS } from '../constants/storage/localStorageKeys.constants';

const userService = localStorageService<ContactSingle[]>(
  LOCAL_STORAGE_KEYS.USERS
);

export const App: FC = () => {
  const [contacts, setContacts] = useState<ContactSingle[]>(() => {
    const data = userService.getItem();
    return data ? [...data] : [];
  });

  const [filter, setFilter] = useState('');

  const handleAddContact = (newContact: ContactSingle) => {
    if (handleCheckUniqueContact(newContact.name)) {
      setContacts(contact => [...contacts, newContact]);
    }
  };

  const handleRemoveContact = (id: string) => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleCheckUniqueContact = (name: string) => {
    const isExistContact = !!contacts.find(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    isExistContact && alert('Contact is already exist');
    return !isExistContact;
  };

  const handleFilterChange = (filter: string) => setFilter(filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    userService.setItem(contacts);
  }, [contacts]);

  return (
    <div>
      <h2>Contact Form</h2>
      <ContactForm onAdd={handleAddContact} />
      <h2>Filter</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Contacts</h2>
      {contacts && (
        <ContactList
          contacts={getVisibleContacts()}
          onRemove={handleRemoveContact}
        />
      )}
    </div>
  );
};
