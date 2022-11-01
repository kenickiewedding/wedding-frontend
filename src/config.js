export const API =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nickysweddingbackend.herokuapp.com";
