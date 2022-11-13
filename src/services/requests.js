import { API } from "../config";

export const getUsers = (lastName) => {
  return fetch(API + `/users?last_name=${lastName}`).then((response) =>
    response.json()
  );
};

export const getFamilyUnit = (firstName, lastName) => {
  return fetch(
    API + `/users/save_the_date?first_name=${firstName}&last_name=${lastName}`
  ).then((res) => res.json());
};
