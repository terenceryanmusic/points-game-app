const router = require('express').Router();
const { getRewards, setReward, updateReward, deleteReward } = require('../controllers/rewardController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getRewards).post(protect, setReward);
router.route('/:id').delete(protect, deleteReward).put(protect, updateReward);

module.exports = router;
