const express = require('express')
const commentController = require('../controllers/commet-controller')
const isloggedIn = require('../middlewares/isloggedIn')



const router = express.Router()

router.post('/new-comment',isloggedIn,commentController)
router.get('/get-comments',commentController)

module.exports =  router
