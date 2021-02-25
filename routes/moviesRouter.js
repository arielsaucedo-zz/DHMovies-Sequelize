var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")

router.get('/', moviesController.list)
router.get('/new', moviesController.last)
router.get('/recommended', moviesController.recommended)
router.get('/search', moviesController.search)
router.get('/detail/:id', moviesController.detail)

module.exports = router