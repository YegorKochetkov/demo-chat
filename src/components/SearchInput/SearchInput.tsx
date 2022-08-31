import React, { memo, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setSearchQuery } from '../../store/searchQuerySlice';
import styles from './SearchInput.module.scss';

export const SearchInput: React.FC = memo(() => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchQuery(query));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [dispatch, query]);

  return (
    <input
      type='search'
      placeholder='Search or start new chat'
      className={styles.searchInput}
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
});