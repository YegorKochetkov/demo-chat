import { getContacts } from '../../store/contactsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { Message } from "../Message";
import { MessageInput } from "../MessageInput";
import styles from './ChatRoom.module.scss';
import { useMemo } from 'react';
import { getSelectedContact, setSelectedContact } from "../../store/selectedContact";

export const ChatRoom: React.FC = () => {
  const dispatch = useAppDispatch();

  const selectedContactId = useAppSelector(getSelectedContact);
  const contacts = useAppSelector(getContacts);
  
  const contact = useMemo(() => {
    return contacts.find((contact) => selectedContactId === contact.id)
  }, [selectedContactId, contacts]);

  return (
    <>
    {contact && 
      <section className={
        selectedContactId
          ? styles.chatRoom + ' ' + styles.chatRoom_selectedChat
          : styles.chatRoom
      }>
        <header className={styles.chatRoom__header}>
          <UserAvatar photo={contact.avatar} isOnline={contact.isOnline} />
          <p className={styles.chatRoom__userInfo}>
            {contact.name}
          </p>
          <button
            type='button'
            name='back to contacts'
            className={styles.chatRoom__backButton}
            onClick={() => dispatch(setSelectedContact(null))}
          />
        </header>

        <main className={styles.chatRoom__main}>
          {contact.messages.map((message, index) => 
            <Message
              key={message.userId + index}
              message={message}
            />
          )}
        </main>

        <footer className={styles.chatRoom__footer}>
          <MessageInput />
        </footer>
      </section>
    }
    </>
  );
};