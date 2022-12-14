import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkNotificationPromise } from "../helpers/checkNotificationPromise";
import { SortContactsByDate } from '../helpers/SortContactsByDate';
import { mockInitialData } from "../mockInitialData/mockInitialData";
import { RootState } from './store';

export type MessageType = {
  userId: number,
  isMyMessage: boolean,
  text: string,
  createdAt: string,
};

export type ContactType = {
  id: number,
  name: string,
  avatar: string,
  messages: MessageType[],
  isOnline: boolean,
}

const history = localStorage.getItem('contacts');
let initialState: ContactType[] = mockInitialData;

if (history !== null) {
  initialState = JSON.parse(history);
}


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<ContactType[]>) => {
      state = [ ...action.payload ];
    },
    addMessage: (state, action: PayloadAction<MessageType>) => {
      const contact = state.find((contact) =>
        contact.id === action.payload.userId
      );

      contact?.messages.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));

      if (checkNotificationPromise()) {
        Notification.requestPermission(newMessage);
      }

      function newMessage(permission: string) {
        if (permission !== "granted") return false;

        if (document.visibilityState !== 'visible') {
          const notify = new Notification("Fake chat", {
            body : action.payload.text,
          });
  
          notify.onclick = function () {
            notify.close();
            window.focus();
          };

          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              // The tab has become visible so clear the now-stale Notification.
              notify.close();
            }      
          });
        }
      }
    },
  }
});

export const { addMessage, setContacts } = contactsSlice.actions;

export const getContacts = (state: RootState) => SortContactsByDate(state.contacts);

export default contactsSlice.reducer;
