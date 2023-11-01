import { EUser } from "entities/user.entity";
import { Request } from "express";

export interface RequestContext extends Request {
  context: {
    user?: EUser;
  };
}
