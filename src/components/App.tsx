import { FC } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App: FC = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <ContactForm />
      <h2>Filter</h2>
      <Filter />
      <h2>Contacts</h2>
      {<ContactList />}
    </div>
  );
};
