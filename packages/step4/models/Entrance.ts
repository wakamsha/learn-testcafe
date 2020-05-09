import { Selector } from 'testcafe';

const inputEmail = Selector('input[type="email"]');
const inputPassword = Selector('input[type="password"]');
const notificationMessage = Selector('[data-e2e="notification-message"]');

export const Entrance = {
  inputEmail,
  inputPassword,
  notificationMessage,
} as const;
