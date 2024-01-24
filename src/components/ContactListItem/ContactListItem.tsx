import { FC } from 'react';
import { ContactListItemProps } from './ContactListItem.types';
import { useDispatch } from 'react-redux';
import { removeContact } from '@/redux/contactSlice';

export const ContactListItem: FC<ContactListItemProps> = ({
  name,
  number,
  id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeContact(id));
  };

  return (
    <li>
      {name} : {number} <button onClick={handleRemoveClick}>Delete</button>
    </li>
  );
};
