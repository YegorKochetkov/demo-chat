import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortContactsByDate } from '../helpers/SortContactsByDate';
import { RootState } from './store';

export type Message = {
  userId: number,
  isMyMessage: boolean,
  text: string,
  createdAt: string,
};

export type Contact = {
  id: number,
  name: string,
  avatar: string,
  messages: Message[],
  isOnline: boolean,
}

interface ContactsState {
  contactsList: Contact[],
  selectedContact: number | null,
}

const initialState: ContactsState = {
  contactsList: [
    {
      id: 1,
      name: 'Alice Freeman',
      avatar: '../assets/Alice.png',
      messages: [
        {
          userId: 1,
          isMyMessage: false,
          text: 'You are the worst!',
          createdAt: new Date(2017, 1, 12).toJSON(),
        }
      ],
      isOnline: true,
    },
    {
      id: 2,
      name: 'Josefina',
      avatar: '../assets/Josefina.png',
      messages: [
        {
          userId: 2,
          isMyMessage: false,
          text: 'Quickly come to the meeting room 1B, we have a big server issue!',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: true,
          text: 'I`m having breakfast right now, can`t you wait for 10 minutes?',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: false,
          text: 'We are losing money! Quick!',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: false,
          text: 'Quickly come to the meeting room 1B, we have a big server issue!',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: true,
          text: 'I`m having breakfast right now, can`t you wait for 10 minutes?',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: false,
          text: 'We are losing money! Quick!',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: false,
          text: 'Quickly come to the meeting room 1B, we have a big server issue!',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: true,
          text: 'I`m having breakfast right now, can`t you wait for 10 minutes?',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
        {
          userId: 2,
          isMyMessage: false,
          text: 'We are losing money! Quick!',
          createdAt: new Date(2017, 4, 22).toJSON(),
        },
      ],
      isOnline: true,
    },
    {
      id: 3,
      name: 'Velazquez',
      avatar: '../assets/Velazquez.png',
      messages: [
        {
          userId: 3,
          isMyMessage: false,
          text: 'Quickly come to the meeting room 1B, we have a big server issue',
          createdAt: new Date(2017, 3, 18).toJSON(),
        }
      ],
      isOnline: false,
    },
    {
      id: 4,
      name: 'Barrera',
      avatar: '../assets/Barrera.png',
      messages: [],
      isOnline: true,
    },
  ],
  selectedContact: null,
};

const historyState = localStorage.getItem('contacts');

if (historyState !== null) {
  initialState.contactsList = [ ...JSON.parse(historyState) ];
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contactsList = [ ...action.payload ];
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const contact = state.contactsList.find((contact) =>
        contact.id === action.payload.userId
      );

      contact?.messages.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contactsList));
    },
    setSelectedContact: (state, action: PayloadAction<number | null>) => {
      state.selectedContact = action.payload;
    },
  }
});

export const { addMessage, setSelectedContact, setContacts } = contactsSlice.actions;

export const getContacts = (state: RootState) => SortContactsByDate(state.contacts.contactsList);
export const getSelectedContact = (state: RootState) => state.contacts.selectedContact;

export default contactsSlice.reducer;
