const router = require("../../node_modules/express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAllBooks)
  .post(booksController.createBook);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findBookById)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = router;
