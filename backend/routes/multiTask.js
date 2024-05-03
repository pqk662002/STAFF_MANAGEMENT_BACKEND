const multiTaskController = require("../controllers/multiTaskController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyToken, multiTaskController.getAllMultiTask);
router.post("/", multiTaskController.addNewMultiTask)

module.exports = router;