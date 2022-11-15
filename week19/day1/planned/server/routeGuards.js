export function isLoggedIn(req, res, next) {
  console.log(req.session);
  console.log(req.session.currentUser);
  if (!req.session.currentUser) {
    return res
      .status(401)
      .json({ errorMessage: "user needs to be logged in!" });
  }
  next();
}

export function isLoggedOut(req, res, next) {
  if (req.session.currentUser) {
    return res
      .status(400)
      .json({ errorMessage: "user needs to be logged out!" });
  }
  next();
}
