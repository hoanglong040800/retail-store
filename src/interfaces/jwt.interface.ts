import { EUser } from "entities";
import { JwtPayload } from "jsonwebtoken";

export interface IJwtPayload extends JwtPayload {
  user: EUser;
}
