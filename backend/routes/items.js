const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  addItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
  searchItems
} = require('../controllers/itemController');

// Note: Order matters. /search must come before /:id to prevent "search" from being treated as an id.
router.get('/search', searchItems);

router.post('/', auth, addItem);
router.get('/', getItems);
router.get('/:id', getItemById);

router.put('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);

module.exports = router;
