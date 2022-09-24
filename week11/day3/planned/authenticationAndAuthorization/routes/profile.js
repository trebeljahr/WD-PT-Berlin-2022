const { isLoggedIn } = require("../middlewares/routeGuards");

const router = require("express").Router();

router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { user: req.session.currentUser });
});

module.exports = router;
