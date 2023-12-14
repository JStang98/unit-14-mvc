const router = require('express').Router();
const { Comment} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body, 
      post_Id: req.body.postId
    })
    res.status(200).json(comment)
    
  } catch (error) {
    res.status(500).json(error)
  }
})















module.exports = router;