import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "skinny_cow_cat", {
    expiresIn: "30d",
  });
};

export default generateToken;
