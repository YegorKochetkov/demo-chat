import React from 'react';
import styles from './Chat.module.scss';
import { ChatRoom } from '../ChatRoom';
import { ContactsList } from '../ContactsList';

export const Chat: React.FC = () => {
  return (
    <div className={styles.chat}>
      <ContactsList />
      <ChatRoom />
    </div>
  )
};