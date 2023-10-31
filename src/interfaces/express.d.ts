declare namespace Express {
  interface Response {
    sendResponse: (data: any, status?: number, message?: string) => void;
  }
}