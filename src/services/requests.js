import { API } from "../config";

export const getUsers = (lastName) => {
  return fetch(API + `/users?last_name=${lastName}`).then((response) =>
    response.json()
  );
};
