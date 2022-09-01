import React, { Suspense } from 'react';
import styles from './Chat.module.scss';

const ChatRoom = React.lazy(() => import('../ChatRoom')
  .then(({ ChatRoom }) => ({ default: ChatRoom })));
const ContactsList = React.lazy(() => import('../ContactsList')
  .then(({ ContactsList }) => ({ default: ContactsList })));

export const Chat: React.FC = () => {
  return (
    <div className={styles.chat}>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactsList />
        <ChatRoom />
      </Suspense>
    </div>
  )
};