import { FC } from 'react';
import { nanoid } from 'nanoid';

import { addContact } from '@/redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getName, getNumber } from '@/redux/selectors';
import { setName, setNumber } from '@/redux/formSlice';
import { Button } from '@mui/material';

export const ContactForm: FC = () => {
  const name = useSelector(getName);
  const number = useSelector(getNumber);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === 'name' ? dispatch(setName(value)) : dispatch(setNumber(value));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    if (!handleCheckUniqueContact(name)) return;

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Заповніть усі поля');
      return false;
    }
    return true;
  };

  const handleCheckUniqueContact = (name: string) => {
    const isExistContact = !!contacts.find(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    isExistContact && alert('Contact is already exist');
    return !isExistContact;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={name} name="name" onChange={onChangeInput} />
      <input type="tel" value={number} name="number" onChange={onChangeInput} />
      <button type="submit">Add contact</button>
    </form>
  );
};
