import type { Request } from "express";

interface ISavedUser {
  firstname: string;
  lastname: string;
  stateName: string;
  email: string;
  password: string;
  branch: string;
  city: string;
  isAdmin?: boolean;
  mobile: string;
  pic?: string;
  _id?: string;
}

type TUser = Request & ISavedUser;

export type { ISavedUser, TUser };
