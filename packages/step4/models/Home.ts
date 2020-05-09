import { Selector } from 'testcafe';

const pageTitle = Selector('[data-e2e="page-title"]');

export const Home = {
  pageTitle,
} as const;
