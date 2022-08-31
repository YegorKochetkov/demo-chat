import React, { memo, useState } from 'react';
import {
  addMessage,
  MessageType,
} from '../../store/contactsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getFakeAnswers } from '../../helpers/getFakeAnswer';
import styles from './MessageInput.module.scss';
import { getSelectedContact } from "../../store/selectedContact";

export const MessageInput: React.FC = memo(() => {
  const selectedContact = useAppSelector(getSelectedContact);
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState('');

  const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedContact && message.trim()) {
      const newMessage: MessageType = {
        userId: selectedContact,
        isMyMessage: true,
        text: message,
        createdAt: new Date().toJSON(),
      }

      dispatch(addMessage(newMessage));
      setMessage('');

      setTimeout(async () => {
        const fakeAnswer = await getFakeAnswers();
        const newMessage: MessageType = {
          userId: selectedContact,
          isMyMessage: false,
          text: fakeAnswer.value,
          createdAt: new Date().toJSON(),
        }

        dispatch(addMessage(newMessage));
      }, 10_000);
    }
  };

  return (
    <form
      action=''
      className={styles.messageInput}
      onSubmit={(event) => handleMessageSubmit(event)}
    >
      <input
        type='text'
        placeholder='Type your message'
        className={styles.messageInput__field}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        type='submit'
        className={styles.messageInput__submit}
      />
    </form>
  );
});