const express = require('express')
const router = express.Router()


const usercontrollers = require('../controllers/user')

router.get('/users', usercontrollers.index)

  router.post('/user', usercontrollers.store)

  router.put('/user/:id', usercontrollers.update)

  router.delete('/user/:id', usercontrollers.delete)
  module.exports = router