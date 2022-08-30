export const dateFormatter = ( date: string, format: string ) => {
  if (!date) {
    return;
  }

  const userListDateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const chatRoomDateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  };

  const userListDate = new Intl.DateTimeFormat('en-US', userListDateOptions);
  const chatRoomDate = new Intl.DateTimeFormat('en-US', chatRoomDateOptions);
  const dateToFormat = new Date(date);

  if (format === 'short') {
    return (
      userListDate.format(dateToFormat)  
    );
  }

  if (format === 'long') {
    return (
      chatRoomDate.format(dateToFormat)  
    );
  }

  return (
    dateToFormat.toString()
  );
};