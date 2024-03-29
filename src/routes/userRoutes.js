const express = require('express')
const router = express.Router()

const usersController = require('../controllers/userController')
const passportMiddleware = require('../middlewares/passportMiddleware')
const {
  createUserValidator,
  updateUserValidator,
} = require('../middlewares/userValidationMiddleware')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

const validateToken = passportMiddleware.authenticate('jwt', { session: false })

router.get('/', usersController.getAllUsers)
router.get('/validate-token',  jwtMiddleware, usersController.validateToken)
router.get('/:id', usersController.getUserById)
router.post('/', createUserValidator, usersController.createUser)
router.put(
  '/:id',
  validateToken,
  updateUserValidator,
  usersController.updateUser
)
router.post('/login', usersController.authUser)

module.exports = router
