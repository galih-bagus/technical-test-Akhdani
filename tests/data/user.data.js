import * as helperFunction from "@helpers/function";
export const INVALID_REGISTER = {
   username: "asd",
   password: "1234"
};

export const VALID_REGISTER = {
   username: "user" + helperFunction.getDateTime(),
   password: "password"
};

export const VALID_CUSTOMER = {
   firstName: "user.galih",
   lastName: helperFunction.getDateTime(),
   postalCode: helperFunction.getDateTime()
};

export const DUPLICATE_CUSTOMER = {
   firstName: "Hermoine",
   lastName: "Granger",
   postalCode: "E859AB"
};

export const SEARCH_DATA_TRANSACTION = {
   startDate: "2015-01-01T00:00",
   endDate: "2015-01-02T00:00"
};
