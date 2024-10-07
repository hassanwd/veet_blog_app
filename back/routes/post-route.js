const express  = require('express')
const { postController, getAllpost, likepost } = require('../controllers/post-controller')
const isloggedIn = require('../middlewares/isloggedIn')

const router = express.Router()

router.post('/new-post',isloggedIn,postController)
router.post('/add-like',isloggedIn,likepost)
router.get('/getAllposts', getAllpost) 

module.exports =  router