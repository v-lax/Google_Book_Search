const router = require("express").Router();
const bookController = require("../../controllers/bookController")

router
    .route("/")
    .post(bookController.create);


module.exports = router