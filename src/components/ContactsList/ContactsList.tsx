import React, { useEffect, useState } from 'react';
import { ContactType, getContacts } from '../../store/contactsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProfile, setUserLogoOut } from '../../store/profileSlice';
import { getSearchQuery } from '../../store/searchQuerySlice';
import { Contact } from '../Contact';
import { SortContactsByDate } from '../../helpers/SortContactsByDate';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { SearchInput } from "../SearchInput";
import { getSelectedContact, setSelectedContact } from "../../store/selectedContact";
import styles from './ContactsList.module.scss';
import { logout } from "../../helpers/handleAuth";
import { useNavigate } from "react-router-dom";
import photo from '../../assets/user_icon.png';

export const ContactsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedContact = useAppSelector(getSelectedContact);
  const contacts = useAppSelector(getContacts);

  const [contactsToRender, setContactsToRender] = useState<ContactType[]>(contacts);
  localStorage.setItem('contacts', JSON.stringify(contacts));

  const profile = useAppSelector(getProfile);
  const searchQuery = useAppSelector(getSearchQuery);

  async function handleLogout() {
    try {
      await logout();
      dispatch(setUserLogoOut());
      dispatch(setSelectedContact(null));
      localStorage.clear();
      navigate('/');
    } catch (err: any) {
      alert('Failed to logout: ' + JSON.stringify(err.code));
    }
  };

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
        <div className={styles.contactsList__userBlock}>
          <UserAvatar photo={profile.avatar || photo} isOnline={true} />
          {profile.name}
          <button
            type='button'
            name='sign out'
            className={styles.contactsList__signOut}
            onClick={handleLogout}
          />
        </div>

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