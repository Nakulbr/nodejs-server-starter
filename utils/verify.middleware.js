const verify = async (req, res, next) => {
  const { hacker } = req.body;
  if (!hacker) {
    return next();
  }
  res.status(405).json({
    error: "You are not authorized",
  });
};

module.exports = { verify };
