/* eslint-disable no-unused-vars */
declare namespace Express {
  interface Response {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sendResponse: (data: any, status?: number, message?: string) => void;
  }
}
/* eslint-enable no-unused-vars */
