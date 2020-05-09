// https://github.com/yargs/yargs/blob/master/docs/typescript.md
import { option } from 'yargs';

type Variant = 'local' | 'dev' | 'stg' | 'prod';

const variants: ReadonlyArray<Variant> = ['local', 'dev', 'stg', 'prod'];

const { variant } = option('variant', {
  choices: variants,
  demandOption: true,
}).argv;

export const baseUrl = {
  local: 'http://localhost:3000',
  dev: 'https://dev-app.legalforce-cloud.com',
  stg: 'https://stg-app.legalforce-cloud.com',
  prod: 'https://app.legalforce-cloud.com',
}[variant];
