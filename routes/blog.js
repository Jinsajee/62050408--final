var express = require("express");
var router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogController.index);
router.post("/", blogController.add);
router.delete("/:id", blogController.remove);

module.exports = router;
