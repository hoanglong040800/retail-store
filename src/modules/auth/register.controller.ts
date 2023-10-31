import { Request, Response } from "express";

interface IReq extends Request {
  body: {
    email: string;
    password: string;
  };
}

// validate input
export const RegisterController = (req: IReq, res: Response) => {
  try {
    // check email in db
    // save new user in db
    // generate new jwt access + refresh token
    // return access + refresh token
  } catch (e) {
    res.sendResponse(500);
  }
};
