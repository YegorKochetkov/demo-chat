import React from 'react';
import styles from './App.module.scss';
import { SignUp } from './components/SignUp/SignUp';
import { Login } from './components/Login/Login';
import { Navigate, Route, Routes} from 'react-router-dom'
import { Chat } from './components/Chat';
import { RequireAuth } from './components/RequireAuth';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route element={<Navigate to='/chat' />} path='/' />
        <Route element={<Navigate to='/chat' />} path='/*' />
        <Route element={<RequireAuth />} path='/chat'>
          <Route element={<Chat />} path='/chat' />
        </Route>
        <Route element={<Login />} path='/login' />
        <Route element={<SignUp />} path='/signup' />
      </Routes>
    </div>
  )
};
export default App;