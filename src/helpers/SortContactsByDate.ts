import { Contact } from "../../store/contactsSlice";

export const SortContactsByDate = (contacts: Contact[]) => {
  return [...contacts].sort((prevContact, nextContact) => {
    if (prevContact.messages.length && nextContact.messages.length) {
      const prevContactLastMessageDate = new Date(prevContact.messages[prevContact.messages.length - 1].createdAt);
      const nextContactLastMessageDate = new Date(nextContact.messages[nextContact.messages.length - 1].createdAt);

      if (prevContactLastMessageDate > nextContactLastMessageDate) return -1;
      if (prevContactLastMessageDate < nextContactLastMessageDate) return 1;
    }
    return 0;
  });
};