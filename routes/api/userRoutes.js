const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  createUser,
  putOneUser,
  deleteOneUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser).put(putOneUser).delete(deleteOneUser);

router.route('/:userId/friends/:friendId').post()
module.exports = router;