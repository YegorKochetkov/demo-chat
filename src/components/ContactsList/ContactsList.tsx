// import React, { useEffect, useState } from 'react';
// import { getContacts, getSelectedContact } from '../../store/contactsSlice';
// import { useAppSelector } from '../../store/hooks';
// import { getProfileAvatar } from '../../store/profileSlice';
// import { getSearchQuery } from '../../store/searchQuerySlice';
// import { Contact } from '../Contact/Contact';
// import { SortContactsByDate } from "../helpers/SortContactsByDate";
// import { SearchInput } from '../SearchInput/SearchInput';
// import { UserAvatar } from '../UserAvatar/UserAvatar';
import { Contact } from "../Contact/Contact";
import styles from './ContactsList.module.scss';

export const ContactsList: React.FC = () => {
  return <p className={styles.contactsList}>
    And here
    <Contact />
    </p>
  // const selectedContact = useAppSelector(getSelectedContact);
  // let contacts = useAppSelector(getContacts);
  // const [contactsToRender, setContactsToRender] = useState(contacts);

  // const avatar = useAppSelector(getProfileAvatar);
  // const searchQuery = useAppSelector(getSearchQuery);

  // useEffect(() => {
  //   setContactsToRender(SortContactsByDate(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const sortedContactsList = contacts.filter((contact) => {
  //     return contact.name.toLowerCase().includes(searchQuery)
  //       || contact.messages.some(
  //           (message) => message.text.toLowerCase().includes(searchQuery)
  //         );
  //   });

  //   setContactsToRender(sortedContactsList);
  // }, [searchQuery]);

  // return (
  //   <aside className={
  //     selectedContact
  //       ? styles.contactsList + ' ' + styles.contactsList_selectedChat
  //       : styles.contactsList
  //   }>
  //     <header className={styles.contactsList__header}>
  //       <UserAvatar photo={avatar} isOnline={true} />
  //       <SearchInput />
  //     </header>
  //     <main className={styles.contactsList__main}>
  //       <h2 className={styles.contactsList__title}> 
  //         Chats
  //       </h2>
  //       {contactsToRender.map((contact) => 
  //         <Contact
  //         contact={contact}
  //         isOnline={contact.isOnline}
  //         key={contact.id}
  //       />
  //       )}
  //     </main>
  //   </aside>
  // );
};