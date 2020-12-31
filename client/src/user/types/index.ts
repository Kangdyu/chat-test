export interface IUser {
  id: string;
  nickname: string;
  color: string;
}

export interface IUsers {
  [id: string]: IUser;
}
