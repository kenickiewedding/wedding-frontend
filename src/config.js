export const API =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nicky-and-kirsten-wedding.herokuapp.com";
