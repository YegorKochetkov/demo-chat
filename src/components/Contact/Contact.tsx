import React, { memo } from 'react';
import { UserAvatar } from "../UserAvatar";
// import { Contact as ContactType, setSelectedContact } from '../../store/contactsSlice';
// import { useAppDispatch } from '../../store/hooks';
// import { dateFormatter } from '../helpers/dateFormatter';
// import { UserAvatar } from '../UserAvatar/UserAvatar';
import styles from './Contact.module.scss';

// type Props = {
//   contact: ContactType,
//   isOnline: boolean,
// };

export const Contact: React.FC = memo(() => {
  return <p className={styles.contact}>here 3
  <UserAvatar />
  </p>
// export const Contact: React.FC<Props> = memo(({ contact, isOnline }) => {
  // const {
  //   id,
  //   name,
  //   messages,
  //   avatar,
  // } = contact;

  // const dispatch = useAppDispatch();

  // return (
  //   <article
  //     className={styles.contact}
  //     key={id}
  //     onClick={() => dispatch(setSelectedContact(id))}
  //   >
  //     <div className={styles.contact__avatar}>
  //       <UserAvatar photo={avatar} isOnline={isOnline} />
  //     </div>

  //     <h3 className={styles.contact__name}>
  //       {name}
  //     </h3>

  //     <p className={styles.contact__message}>
  //       {messages[messages.length - 1]?.text}
  //     </p>

  //     <p className={styles.contact__date}>
  //       {dateFormatter(
  //         messages[messages.length - 1]?.createdAt,
  //         'short'
  //       )}
  //     </p>
  //   </article>
  // );
});