const express  = require('express');
const notesController = require('../Controller/notesController');
const authController = require('../Controller/authController');
const router = express.Router();

router.get('/:id?' , authController.protect, notesController.allNotes);
router.post('/create-Note' , authController.protect, notesController.createNote);

router.route('/:id')
    .patch(authController.protect,notesController.updateNote)
    .delete(authController.protect,notesController.deleteNote);

module.exports = router;