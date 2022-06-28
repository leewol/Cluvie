import { atom } from "recoil";

export const isSignInUser = atom<boolean>({
  key: "isSignInUser",
  default: !!window.localStorage["token"],
});