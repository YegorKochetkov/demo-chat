import React, { memo } from 'react';
import { getContacts } from '../../store/contactsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { dateFormatter } from '../../helpers/dateFormatter';
import { UserAvatar } from '../UserAvatar';
import styles from './Contact.module.scss';
import { setSelectedContact } from "../../store/selectedContact";

type Props = {
  id: number,
};

export const Contact: React.FC<Props> = memo(({ id }) => {
  const contact = useAppSelector(getContacts).find((contact) => contact.id === id);
  const dispatch = useAppDispatch();

  return (
    <article
      className={styles.contact}
      key={id}
      onClick={() => dispatch(setSelectedContact(id))}
    >
      {contact && (
        <>
          <div className={styles.contact__avatar}>
            <UserAvatar photo={contact.avatar} isOnline={contact.isOnline} />
          </div>

          <h3 className={styles.contact__name}>
            {contact?.name}
          </h3>

          <p className={styles.contact__message}>
            {contact?.messages[contact?.messages.length - 1]?.text}
          </p>

          <p className={styles.contact__date}>
            {dateFormatter(
              contact.messages[contact.messages.length - 1]?.createdAt,
              'short'
            )}
          </p>
        </>
      )}
    </article>
  );
});