// https://qiita.com/akameco/items/6567ccb1fd3b2e787f56

declare namespace NodeJS {
  interface ProcessEnv {
    readonly BASIC_AUTH_USERNAME: string;
    readonly BASIC_AUTH_PASSWORD: string;
    readonly ADMIN_EMAIL: string;
    readonly ADMIN_PASSWORD: string;
    readonly MEMBER_EMAIL: string;
    readonly MEMBER_PASSWORD: string;
  }
}
