const router = require('express').Router();
const postRoutes = require('./post-routes');
const userRoutes = require("./user-routes");
const commentRoutes = require('./comment-routes')

router.use("/user", userRoutes)
router.use("/comment", commentRoutes)
router.use("/post", postRoutes)














module.exports = router;