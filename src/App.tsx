import React from 'react';
import styles from './App.module.scss';
import { ChatRoom } from './components/ChatRoom';
import { ContactsList } from "./components/ContactsList";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <ContactsList />
      <ChatRoom />
    </div>
  )
};
export default App;