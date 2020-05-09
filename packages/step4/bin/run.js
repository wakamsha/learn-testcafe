const path = require('path');
const { argv } = require('yargs');
const createTestCafe = require('testcafe');

/**
 * テストを実行する環境を指定します。
 *
 * @type {'dev' | 'stg' | 'prod'}
 * @default 'dev'
 */
const variant = argv.variant || 'dev';

/**
 * テストを実行するブラウザを指定します。
 *
 * 'all' を指定するとそのマシンにインストール済みの全ブラウザで実行します。
 * @type {'all' | 'chrome' | 'chrome:headless' | 'firefox' | 'firefox:headless' | 'safari' | 'ie' | 'edge' | 'browserstack:{Chrome|IE|Edge}:Windows 10'}
 * @default 'chrome'
 */
const browsers = argv.browsers || 'chrome';

if (!['dev', 'stg', 'prod'].includes(variant)) {
  console.error('🙅‍♀️ variant must be "dev", "stg" or "prod"');
  process.exit(1);
}

console.info(`variant: ${variant}`);
console.info(`browsers: ${browsers}`);

let testcafe = null;

createTestCafe('localhost', 1337, 1338)
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
      .screenshots({
        path: './reports/screenshots',
        takeOnFails: true,
      })
      .src(path.resolve(__dirname, `../fixtures/**/*.ts`))
      .browsers([browsers])
      .run();
  })
  .then(failedCount => {
    console.info(`Tests failed: ${failedCount}`);
    testcafe.close();
  })
  .catch(error => {
    console.error('Error', error);
    testcafe.close();
  });
