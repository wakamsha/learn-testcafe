import { Account } from '../common/constants/Account';
import { Entrance } from '../models/Entrance';
import { Home } from '../models/Home';
import { setupFixture } from '../common/helper';

const { email, password } = Account.Admin;

setupFixture('Entrance');

test('Admin アカウントでログインする -> ログイン成功する', async t => {
  await t
    .typeText(Entrance.inputEmail, email)
    .typeText(Entrance.inputPassword, password)
    .pressKey('enter')
    .expect(Home.pageTitle.innerText)
    .eql('ホーム');
});
