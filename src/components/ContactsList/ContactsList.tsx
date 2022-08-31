import React, { useEffect, useState } from 'react';
import { ContactType, getContacts } from '../../store/contactsSlice';
import { useAppSelector } from '../../store/hooks';
import { getProfile } from '../../store/profileSlice';
import { getSearchQuery } from '../../store/searchQuerySlice';
import { Contact } from '../Contact';
import { SortContactsByDate } from '../../helpers/SortContactsByDate';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { SearchInput } from "../SearchInput";
import { getSelectedContact } from "../../store/selectedContact";
import styles from './ContactsList.module.scss';

export const ContactsList: React.FC = () => {
  const selectedContact = useAppSelector(getSelectedContact);
  const contacts = useAppSelector(getContacts);

  const [contactsToRender, setContactsToRender] = useState<ContactType[]>(contacts);
  localStorage.setItem('contacts', JSON.stringify(contacts));

  const profile = useAppSelector(getProfile);
  const searchQuery = useAppSelector(getSearchQuery);

  useEffect(() => {
    setContactsToRender(SortContactsByDate(contacts));
  }, [contacts]);

  useEffect(() => {
    const sortedContactsList = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchQuery)
        || contact.messages.some(
          (message) => message.text.toLowerCase().includes(searchQuery)
        );
    });

    setContactsToRender(sortedContactsList);
  }, [contacts, searchQuery]);

  return (
    <aside className={
      selectedContact
        ? styles.contactsList + ' ' + styles.contactsList_selectedChat
        : styles.contactsList
    }>
      <header className={styles.contactsList__header}>
        <UserAvatar photo={profile.avatar} isOnline={true} />
        <SearchInput />
      </header>
      <main className={styles.contactsList__main}>
        <h2 className={styles.contactsList__title}>
          Chats
        </h2>
        {contactsToRender.map((contact) =>
          <Contact
            id={contact.id}
            key={contact.id}
          />
        )}
      </main>
    </aside>
  );
};