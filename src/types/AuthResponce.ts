import { IUser } from "./ICommentUser";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
