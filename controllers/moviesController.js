const db = require("../database/models")
let Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = {
    list : function (req, res) {
        db.Movies.findAll()
        .then(function(moviesList) {
          res.render('movies/list', {movies : moviesList})
        })
      },

    last: function (req, res) {
        db.Movies.findAll({
          order : [["release_date", "DESC"]],
          limit: 5,
        })
        .then(function(lastMovies) {
          res.render('movies/last', {movies : lastMovies})
        })
      },

    recommended: function (req, res) {
        db.Movies.findAll({
          where: {
           rating: {[Op.gte]: 8}
          }
        })
        .then(function(recommendedMovies) {
          res.render('movies/recommended', {movies : recommendedMovies})
        })
      },

    search: function (req, res) {
        let searchResults = []
        db.Movies.findAll({
          attributes: {exclude: ["length"]}
        })
        .then((movies) => {
            searchResults = movies.filter(function (moviesElement) {
                let buscado = req.query.search
                let titulo = moviesElement.title

                if (titulo.includes(buscado)) {
                    return true
                } else {
                    return false
                }
            })
            res.render('movies/search', {
                movies: searchResults
            })
        })
        .catch(function(error){
            console.log(error)
            res.send('')
           
        })
    },

    detail: function (req, res) {
      db.Movies.findByPk(req.params.id)
    
      .then(function(movie){
        res.render('movies/show', {
          movie : movie 
        })
      })
    }
}