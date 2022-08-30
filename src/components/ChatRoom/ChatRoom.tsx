// import { getContacts, getSelectedContact, setSelectedContact } from '../../store/contactsSlice';
// import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { MessageInput } from '../MessageInput/MessageInput';
// import { Message } from '../Message/Message';
// import { UserAvatar } from '../UserAvatar/UserAvatar';
import { Message } from "../Message";
import { MessageInput } from "../MessageInput";
import styles from './ChatRoom.module.scss';
// import { useMemo } from 'react';

export const ChatRoom: React.FC = () => {
  return <p className={styles.chatRoom}>
    Here
    <Message />
    <MessageInput />
    </p>
  // const dispatch = useAppDispatch();
  // const selectedContact = useAppSelector(getSelectedContact);
  // const contacts = useAppSelector(getContacts);
  
  // const contact = useMemo(() => {
  //   return contacts.find((contact) => 
  //     selectedContact === contact.id)
  // }, [selectedContact, contacts]);

  // return (
  //   <section className={
  //     selectedContact
  //       ? (styles.chatRoom + ' ' + styles.chatRoom_selectedChat)
  //       : styles.chatRoom
  //   }>
  //     {contact && (
  //       <header className={styles.chatRoom__header}>
  //         <UserAvatar photo={contact.avatar} isOnline={contact.isOnline} />
  //         <p className={styles.chatRoom__userInfo}>
  //           {contact.name}
  //         </p>
  //         <button
  //           type='button'
  //           className={styles.chatRoom__backButton}
  //           onClick={() => dispatch(setSelectedContact(null))}
  //         />
  //       </header>
  //     )}
  //     <main className={styles.chatRoom__main}>
  //       {contact?.messages.map((message, index) => 
  //         <Message
  //           key={message.userId + index}
  //           message={message}
  //         />
  //       )}
  //     </main>
  //     {contact && (
  //       <footer className={styles.chatRoom__footer}>
  //         <MessageInput />
  //       </footer>
  //     )}
  //   </section>
  // );
};