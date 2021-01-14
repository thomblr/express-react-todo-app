const router = require('express').Router();
let User = require('../models/user.model');

/**
*   USER API MANAGEMENT
*   - Get all the users  (/)
*   - Get a user         (/i/:id)
*   - Get user by name   (/u/:username)
*   - Add a new user     (/add)
*   - Remove a user      (/del/:id)
*   - Update a user      (/update/:id)
*/

/**
* Basic User route getting all the users
*/
router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Get a user by its ID
 */
router.route('/i/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Get a user by its username
 */
router.route('/u/:username').get((req, res) => {
    User.find({username: req.params.username})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Add a new user
 */
router.route('/add').post((req, res) => {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    newUser.save()
      .then(() => res.json('New User added!'))
      .catch(err => res.json('Error: ' + err));
});


/**
 * Remove a user
 */
router.route('/del/:id').delete((req, res) => {
  const _id = req.params.id;
  User.deleteOne({_id: _id})
    .then(() => res.json('User deleted!'))
    .catch(err => res.json('Error: ' + err));
});


/**
 * Update a user
 */
router.route('/update/:id').put((req, res) => {
  const _id = req.params.id;

  User.findByIdAndUpdate(_id, req.body)
    .then(() => res.json('User updated!'))
    .catch(err => res.json('Error: ' + err));
});

module.exports = router;