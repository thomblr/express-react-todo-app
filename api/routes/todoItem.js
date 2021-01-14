const router = require('express').Router();
let TodoItem = require('../models/todoItem.model');

/**
 *  TODOITEM API MANAGEMENT
 *  - Get all items (/)
 */

/**
 * Basic route getting all todo items
 */
router.route('/').get((req, res) => {
    TodoItem.find()
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;