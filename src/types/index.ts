export interface ILoginForm {
    usernameOrEmail: string
    password: string
}

export interface ICardUser {
  avatar: string;
  name: string;
  message: string;
  notifyStatus?: string;
  userPresence?: boolean;
}
