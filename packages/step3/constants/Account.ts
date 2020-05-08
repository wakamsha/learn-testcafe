const {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  MEMBER_EMAIL,
  MEMBER_PASSWORD,
} = process.env;

export const Account = {
  Admin: {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  },
  member: {
    email: MEMBER_EMAIL,
    password: MEMBER_PASSWORD,
  },
} as const;
