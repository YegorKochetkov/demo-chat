import React, { memo } from 'react';
// import React, { memo, useEffect, useRef } from 'react';
// import { getSelectedContact, Message as MessageType } from '../../store/contactsSlice';
// import { useAppSelector } from '../../store/hooks';
// import { dateFormatter } from '../helpers/dateFormatter';
import styles from './Message.module.scss';


export const Message: React.FC = memo(() => {
  return <p className={styles.message}>here 4</p>
// export const Message: React.FC<Props> = memo(({ message }) => {
  // const selectedContact = useAppSelector(getSelectedContact);

  // const lastMessage = useRef<null | HTMLDivElement>(null);

  // useEffect(() => {
  //   lastMessage.current?.scrollIntoView();
  // }, [selectedContact]);

  // return (
  //   <div
  //     className={styles.message}
  //     ref={lastMessage}
  //   >
  //     <p className={message.isMyMessage
  //       ? styles.message__myMessage
  //       : styles.message__text
  //     }>
  //       {message.text}
  //     </p>
  //     <p className={message.isMyMessage
  //       ? styles.message__myMessageDate
  //       : styles.message__date
  //     }>
  //       {dateFormatter(message.createdAt, 'long')}
  //     </p>
  //   </div>
  // );
});