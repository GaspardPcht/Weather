var express = require("express");
var router = express.Router();

// Exemple d'une route GET
router.get("/", function (req, res, next) {
  res.send("Index route");
});

module.exports = router;
