import { EUser } from "entities/user.entity";
import { Request } from "express";

export interface RequestCxt extends Request {
  context: {
    user?: EUser;
  };
}
