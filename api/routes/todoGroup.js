const router = require('express').Router();
let TodoGroup = require('../models/todoGroup.model');

/**
 *  TODOGROUP API MANAGEMENT
 *  - Get all groups (/)
 *  - Get group by id (/i/:id)
 *  - Get group by name (/n/:name)
 *  - Add new group (/add)
 *  - Remove a group (/del/:id)
 *  - Update a group (/update/:id)
 */


/**
 * Basic route getting all todo items
 */
router.route('/').get((req, res) => {
    TodoGroup.find()
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Get group by id
 */
router.route('/i/:id').get((req, res) => {
    TodoGroup.findById(req.params.id)
      .then(group => res.json(group))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Get group by name
 */
router.route('/n/:name').get((req, res) => {
    TodoGroup.findOne({name: req.params.name})
      .then(group => res.json(group))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Add a new group
 */
router.route('/add').post((req, res) => {
    const newGroup = new Group({
        name: req.body.name,
        color: req.body.color
    });

    newGroup.save()
      .then(() => res.json('New Group added!'))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Remove a group
 */
router.route('/del/:id').delete((req, res) => {
    TodoGroup.deleteOne({_id: req.params.id})
      .then(() => res.json('Group deleted!'))
      .catch(err => res.json('Error: ' + err));

});


/**
 * Update a group
 */
router.route('/update/:id').put((req, res) => {
    const _id = req.params.id;

    TodoGroup.findByIdAndUpdate(_id, req.body)
      .then(() => res.json('Group updated!'))
      .catch(err => res.json('Error: ' + err));
});

module.exports = router;