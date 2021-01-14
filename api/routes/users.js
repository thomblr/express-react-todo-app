const router = require('express').Router();
let User = require('../models/user.model');

/**
*   USER API MANAGEMENT
*   - Get all the users  (/)
*   - Get a user         (/i/:id)
*   - Get user by name   (/u/:username)
*   - Add a new user     (/add)
*   - Remove a user      (/del)
*   - ...
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

module.exports = router;