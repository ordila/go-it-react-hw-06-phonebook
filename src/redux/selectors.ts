import { ContactSingle } from '@/components/ContactForm/ContactForm.types';

interface IGeneralStore {
  contacts: {
    contacts: ContactSingle[];
    filter: string;
  };
}

export const getContacts = (state: IGeneralStore) => state.contacts.contacts;
export const getFilter = (state: IGeneralStore) => state.contacts.filter;
