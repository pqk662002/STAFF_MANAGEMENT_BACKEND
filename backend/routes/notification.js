const notificationController = require("../controllers/notificationController");
const {
    verifyToken,
} = require("../controllers/verifyToken");
const router = require("express").Router();

/**
 * get all notifications
 */
router.get('/get-all', verifyToken, notificationController.getAllNotifications)

/**
 * create notifications
 */
router.post('/create', verifyToken, notificationController.createNotification)

/**
 * get notifications from specific user
 */
router.get('/:userId', verifyToken, notificationController.getNotificationByUserId)

/**
 * update notification by id
 */
router.put('/:notificationId', verifyToken, notificationController.updateNotification)

/**
 * delete notification
 */
router.delete('/:notificationId', verifyToken, notificationController.deleteNotification)

module.exports = router;