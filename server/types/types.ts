import type { Request } from "express";

import type { Document } from "mongoose";

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

type UUser =
  | (Document<
      unknown,
      {},
      {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        branch: string;
        isAdmin: boolean;
        city: string;
        mobile: string;
        stateName: string;
        pic: string;
      }
    > &
      Omit<any, any>)
  | null;
type UUserI = Document<unknown, {}, ISavedUser>;

type TUser = Request & ISavedUser;

export type { ISavedUser, TUser, UUser };
