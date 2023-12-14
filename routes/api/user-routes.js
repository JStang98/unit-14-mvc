const router = require('express').Router();
const { Post, User, Comment} = require('../../models')

router.post("/", async (req, res) => {
  try { 
    const userData = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })

    req.session.save( () => {
      req.session.userId = userData.id
      req.session.userName = userData.id
      req.session.login = true
      res.json(userData)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post("/login", async (req, res) => {
  try { 
    const user = await User.findOne({
      where: {
        userName: req.body.userName
      },
      
    })
    if( !user ){
      res.status(400).json({message: "No user name found"})
    }
    const password = await user.checkPassword( req.body.password)
    if( !password ){
      res.status(400).json({message: "password incorrect"})
    }
    req.session.save( () => {
      req.session.userId = userData.id
      req.session.userName = userData.id
      req.session.login = true
      res.json(user)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})










module.exports = router;