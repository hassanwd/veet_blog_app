const express = require('express')
const { userSignup, userLogin } = require('../controllers/users-controller')

const router = express.Router()

router.post('/user-signup',userSignup)
router.post('/user-login',userLogin)


module.exports =  router