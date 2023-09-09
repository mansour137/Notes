const express  = require('express');
const userController = require('../Controller/userController')
const authController = require('../Controller/authController')
const router = express.Router();


router.post('/sign_up' , authController.signUp )
router.post('/login' , authController.login )
router.get('/logout' , authController.logout )
router.delete('/deleteMe' , authController.protect,authController.deleteMe )
router.patch('/updatedPassword' , authController.protect,authController.updatePassword )
router.post('/forgetPassword' , authController.forgetPassword )
router.post('/resetPassword/:token' , authController.resetPassword )

router.get('/' , userController.allusers);
router.route('/:id')
    .get(userController.user)

module.exports = router;