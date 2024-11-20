import * as helperFunction from "@helpers/function";
export const INVALID_REGISTER = {
  username: "asd",
  password: "1234",
};

export const VALID_REGISTER = {
  username: "user"+helperFunction.getDateTime(),
  password: "password",
};