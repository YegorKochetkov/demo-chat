import React from 'react';
import { render, screen } from '@testing-library/react';
import { Chat } from "./components/Chat";

test('renders fallback for lazy', () => {
  render(
    <Chat />
  );
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
