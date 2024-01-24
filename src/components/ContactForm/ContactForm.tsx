import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactProps } from './ContactForm.types';

export const ContactForm: FC<ContactProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidateForm = validateForm();

    if (!isValidateForm) return;

    onAdd({ id: nanoid(), name, number });
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

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={name} name="name" onChange={onChangeInput} />
      <input type="tel" value={number} name="number" onChange={onChangeInput} />
      <button type="submit">Додати</button>
    </form>
  );
};
