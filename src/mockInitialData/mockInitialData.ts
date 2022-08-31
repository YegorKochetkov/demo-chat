import AlicePhoto from '../assets/Alice.png';
import BarreraPhoto from '../assets/Barrera.png';
import JosefinaPhoto from '../assets/Josefina.png';
import VelazquezPhoto from '../assets/Velazquez.png';
import { ContactType } from "../store/contactsSlice";

export const mockInitialData: ContactType[] = [
  {
    id: 1,
    name: 'Alice Freeman',
    avatar: AlicePhoto,
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
    avatar: JosefinaPhoto,
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
    avatar: VelazquezPhoto,
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
    avatar: BarreraPhoto,
    messages: [],
    isOnline: true,
  },
];
