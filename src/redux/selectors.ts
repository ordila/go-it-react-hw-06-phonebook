import { ContactSingle } from '@/components/ContactForm/ContactForm.types';

interface IGeneralStore {
  contacts: {
    contacts: ContactSingle[];
    filter: string;
  };
  form: {
    name: string;
    number: string;
  };
}

export const getContacts = (state: IGeneralStore) => state.contacts.contacts;
export const getFilter = (state: IGeneralStore) => state.contacts.filter;
export const getName = (state: IGeneralStore) => state.form.name;
export const getNumber = (state: IGeneralStore) => state.form.number;
