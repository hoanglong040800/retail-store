export const mapHttpCodeToMsg: { [key in number]: string } = {
  [200]: "Success",
  [401]: "Unauthorize",
  [404]: "Not found",
  [500]: "Internal Server Error",
};
