// eslint-disable-next-line no-unused-vars
export const mapHttpCodeToMsg: { [key in number]: string } = {
  [200]: "Success",
  [401]: "Unauthorize",
  [404]: "Not found",
  [500]: "Internal Server Error",
};

export const SALT_ROUNDS = 10;
