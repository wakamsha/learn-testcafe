import { Role, Selector } from 'testcafe';

fixture('ArticleSearch').page('https://dev-app.legalforce-cloud.com').httpAuth({
  username: 'lf-webapp-spa',
  password: 'LegalForce',
});

const user = Role(
  'https://dev-app.legalforce-cloud.com',
  async t => {
    await t
      .typeText('input[type="email"]', 'user1@legalforce.co.jp')
      .typeText('input[type="password"]', 'pAssw0rd')
      .pressKey('enter');
  },
  { preserveUrl: true },
);

test('"契約" + "全ての言語" で検索する -> 検索結果が 1件以上ある', async t => {
  await t
    .useRole(user)
    .typeText('input[type="search"]', '契約', { replace: true })
    .pressKey('enter')
    .expect(Selector('[data-e2e="article-list-container"]').visible)
    .eql(true)
    .expect(Selector('[data-e2e="pagination-container"]').visible)
    .eql(true);
});
