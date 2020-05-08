import { Account } from '../constants/Account';
import { Selector } from 'testcafe';
import { baseUrl } from '../constants/BaseUrl';

const { BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD } = process.env;
const { email, password } = Account.Admin;

fixture('Entrance').page(baseUrl).httpAuth({
  username: BASIC_AUTH_USERNAME,
  password: BASIC_AUTH_PASSWORD,
});

test('Admin アカウントでログインする -> ログイン成功する', async t => {
  await t
    .typeText('input[type="email"]', email)
    .typeText('input[type="password"]', password)
    .pressKey('enter')
    .expect(Selector('[data-e2e="page-title"]').innerText)
    .eql('ホーム');
});
