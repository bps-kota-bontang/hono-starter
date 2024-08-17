export type JWT = {
  iss: string;
  sub: string;
  exp: number;
  nbf: number;
  iat: number;
  name: string;
  email: string;
};
