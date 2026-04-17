module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // Fake auth check
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
