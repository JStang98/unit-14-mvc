const router = require('express').Router();
const { Post, User, Comment } = require('../../models')

router.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      text: req.body.text,
      user_id: req.session.userId
    })
    res.json(post)
    
  } catch (error) {
    res.status(500).json(error )
  }
})









module.exports = router;