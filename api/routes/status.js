const router = require('express').Router();
let Status = require('../models/status.model');

/**
 *  STATUS API MANAGEMENT
 *  - Get all status (/)
 *  - Get status by Id (/:id)
 */


/**
 * Basic Status route getting all status
 */
router.route('/').get((req, res) => {
    Status.find()
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * Get status by id
 */
router.route('/:id').get((req, res) => {
    Status.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;