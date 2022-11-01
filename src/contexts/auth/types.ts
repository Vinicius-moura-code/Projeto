export type AuthContextData = {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
};
