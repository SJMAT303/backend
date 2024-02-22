import jwt from "jsonwebtoken";

const checkTokens = role => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(403).json({ message: "You are not authorized" });
      }
      const ogToken = token.split(" ")[1];
      const isValid = jwt.verify(ogToken, process.env.SECRET_KEY);

      if (!role.includes(isValid.role)) {
        return res.status(403).json({ message: "You are not authorized" });
      }
      next();
    } catch (e) {
      return res.statu(403).json({ message: "You are not authorized" });
    }
  };
};

export default checkTokens;
