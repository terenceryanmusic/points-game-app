const router = require('express').Router();
const { getPoints, setPoints, updatePoints, deletePoints } = require('../controllers/pointsController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPoints).post(protect, setPoints);
router.route('/:id').delete(protect, deletePoints).put(protect, updatePoints);

module.exports = router;
