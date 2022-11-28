import { API } from "../config";

const keyTransform = ({
  firstName: first_name,
  lastName: last_name,
  email,
  addressLine1: address_line_1,
  addressLine2: address_line_2,
  city,
  state,
  zip,
}) => {
  return {
    first_name,
    last_name,
    email,
    address_line_1,
    address_line_2,
    city,
    state,
    zip,
  };
};

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

export const createUsers = (users) => {
  users = users.map(keyTransform);
  return fetch(API + `/users`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ users }),
  }).then((res) => res.json());
};

export const login = (password) =>
  fetch(API + `/password`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  }).then((res) => res.json());

export const ping = () => {
  fetch(API + `/ping`);
};
