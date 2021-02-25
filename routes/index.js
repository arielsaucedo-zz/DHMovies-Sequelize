var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DH Movies' });
});



router.get('/movies/:id/edit', function (req, res) {
  res.render('movies/edit', {
    genres : [],
    movie : movie,
  })
})

router.patch('/movies/:id', function (req, res) {
  res.redirect('/movies')
})

router.delete('/movies/:id', function (req, res) {
  // devolver solo la pelicula especificada por el id
})

module.exports = router;
