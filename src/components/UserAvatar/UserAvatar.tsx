import React, { memo } from 'react';
import styles from './UserAvatar.module.scss';

type Props = {
  photo: string,
  isOnline: boolean,
};

export const UserAvatar: React.FC<Props> = memo(({ photo, isOnline }) => {
  return (
    <section className={styles.user}>
      here 7
      <div className={styles.user__photoWrapper}>
        <img
          src={photo}
          alt='User'
          className={styles.user__photo}
        />
      </div>
      <div className={
        isOnline 
          ? styles.user__statusOnline
          : styles.user__statusOffline
        }
      />
    </section>
  );
});