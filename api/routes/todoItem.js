const router = require('express').Router();
let TodoItem = require('../models/todoItem.model');

/**
 *  TODOITEM API MANAGEMENT
 *  - Get all items (/)
 *  - Get all items from a group (/g/:id)
 *  - Add new item (/add)
 *  - Remove item (/del/:id)
 *  - Update item (/update/:id)
 */

/**
 * Basic route getting all todo items
 */
router.route('/').get((req, res) => {
    TodoItem.find()
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Get items from group id
 */
router.route('/g/:id').get((req, res) => {
    TodoItem.find({group: req.params.id})
      .then(items => res.json(items))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Add new item
 */
router.route('/add').post((req, res) => {
    const newItem = new TodoItem({
        item: req.body.item,
    })

    newItem.save()
      .then(() => res.json('New item added!'))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Remove item
 */
router.route('/del/:id').delete((req, res) => {
    TodoItem.deleteOne({_id: req.params.id})
      .then(() => res.json('Item removed!'))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Update an item
 */
router.route('/update/:id').put((req, res) => {
  const _id = req.params.id;

  TodoItem.findByIdAndUpdate(_id, req.body)
    .then(() => res.json('Item updated!'))
    .catch(err => res.json('Error: ' + err));
});

module.exports = router;