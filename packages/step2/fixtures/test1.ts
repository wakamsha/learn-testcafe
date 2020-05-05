import { Selector } from 'testcafe';

fixture('Entrance').page('https://dev-app.legalforce-cloud.com').httpAuth({
  username: 'lf-webapp-spa',
  password: 'LegalForce',
});

test('Admin アカウントでログインする -> ログイン成功する', async t => {
  await t
    .typeText('input[type="email"]', 'user1@legalforce.co.jp')
    .typeText('input[type="password"]', 'pAssw0rd')
    .pressKey('enter')
    .expect(Selector('[data-e2e="page-title"]').innerText)
    .eql('ホーム');
});
