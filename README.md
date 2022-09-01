## Task: implement a fake chat page with the following requirements:
- use React (preferably, but you can use Angular or any other framework)
- it is advisable to write HTML/SCSS your own without using UI libraries
- when starting the application, the chat user should already have a static list
  contacts, as well as the history of communication with some users
- when you select a contact from the contact list, the history is automatically displayed
  communication between users
- each chat message must have the following attributes: message text, time, date of sending.
- user can write a message in chat and after that it should receive an automatic response in 10-15 seconds with a notification.
  To generate an automatic response, you need to use the Chuck Norris API https://api.chucknorris.io/
- implement a search among contacts
- save the message history after reloading the page
- contacts with new messages should automatically move up

## Stack:
- React, Redux Toolkit
- Typescript
- HTML5, SASS
- react-router, react hooks
- mail/password & google authorization
- browser notification
- lazy loading, localStorage
- adaptive layout

## [Демо](https://yegorkochetkov.github.io/demo-chat/)
