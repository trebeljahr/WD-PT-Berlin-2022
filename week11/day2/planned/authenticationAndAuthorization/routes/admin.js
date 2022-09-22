const { isLoggedIn, isAdmin } = require("../middlewares/routeGuards");
const User = require("../models/User.model");
const router = require("express").Router();

router.get("/admin/all-users", isLoggedIn, isAdmin, async (req, res) => {
  const users = await User.find();
  res.render("allUsers", { users, user: req.session.currentUser });
});

module.exports = router;
