const router = require("../../node_modules/express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/Users"
router.route("/").post(userController.createUser);

// Matches with "/api/Users/:id"
router
  .route("/:id")
  .get(userController.findUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
