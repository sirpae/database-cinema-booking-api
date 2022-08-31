const express = require('express');
const {
	getMovies,
	createMovie,
	addMovie,
	getMovieById,
	updateMovieById
} = require('../controllers/movie');

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovie);
router.post('/', createMovie);
router.get('/:id', getMovieById);
router.put("/:id", updateMovieById);

module.exports = router;