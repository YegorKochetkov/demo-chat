import React from 'react';
import styles from './App.module.scss';
import { SignUp } from './components/SignUp/SignUp';
import { Login } from './components/Login/Login';
import { Route, Routes} from 'react-router-dom'
import { Chat } from './components/Chat';
import { RequireAuth } from './components/RequireAuth';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/chat' element={
          <RequireAuth>
            <Chat />
          </RequireAuth>
        } />
      </Routes>
    </div>
  )
};
export default App;