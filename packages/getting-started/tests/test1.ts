import 'testcafe';
import { Selector } from 'testcafe';

fixture('Getting started').page('http://devexpress.github.io/testcafe/example');

test('My first test', async (t: TestController) => {
  await t
    .typeText('#developer-name', 'wakamsha')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, wakamsha!');
});
