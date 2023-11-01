/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Express {
  interface Response {
    sendResponse: (data: any, status?: number, message?: string) => void;
  }

  interface Request {
    context: any;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
/* eslint-enable no-unused-vars */
