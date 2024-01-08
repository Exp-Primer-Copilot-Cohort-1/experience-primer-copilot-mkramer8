// Create web server

const express = require('express');
const router = express.Router();

// Import middlewares
const auth = require('../middlewares/auth');

// Import controller
const commentCtrl = require('../controllers/comment');

// Routes
router.post('/new', auth, commentCtrl.createComment);
router.get('/', auth, commentCtrl.getAllComments);
router.get('/user/:id', auth, commentCtrl.getCommentsByUser);
router.get('/post/:id', auth, commentCtrl.getCommentsByPost);
router.get('/:id', auth, commentCtrl.getOneComment);
router.put('/:id', auth, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;