import { Role } from 'testcafe';
import { baseUrl } from './constants/BaseUrl';

const { BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD } = process.env;

/**
 * フィクスチャ宣言処理を行う。
 *
 * @param name フィクスチャ名
 */
export function setupFixture(name: string) {
  fixture(name).page(baseUrl).httpAuth({
    username: BASIC_AUTH_USERNAME,
    password: BASIC_AUTH_PASSWORD,
  });
}

export function makeRole({
  email,
  password,
  returnTo,
}: {
  email: string;
  password: string;
  returnTo: string;
}): Role {
  return Role(
    `${baseUrl}${returnTo}`,
    async t => {
      await t
        .typeText('input[type="email"]', email)
        .typeText('input[type="password"]', password)
        .pressKey('enter');
    },
    { preserveUrl: true },
  );
}
