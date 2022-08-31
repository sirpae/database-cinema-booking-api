const prisma = require('../utils/prisma');

// get all movies 
const getMovies = async (_req, res) => {

    const allMovies = await prisma.allMovies.findMany({})

    res.json({ data: allMovies })
};

// create a movie
const createMovie = async (req, res) => {
    const createdMovie = await prisma.createdMovie.create({
      data: {
        title: req.body.title,
        runtimeMins: Number(req.body.runtimeMins),
      },
    });
    res.json({ data: createdMovie });
  };
  
// get movie by id 
const getMovieById = async (req, res) => {
	const getChosenMovie = await prisma.movie.findUnique({
		where: {
			id: parseInt(req.params.id),
		},
	});
	if (!getChosenMovie) {
		res.status(404);
		res.json({ error: 'Movie not found in database.' });
		return;
	}
	res.json({ getChosenMovie });
};

// update movie by id 
const updateMovieById = async (req, res) => {
	const updatedMovie = await prisma.movie.update({
		where: {
			id: parseInt(req.params.id),
		},
		data: {
			title: req.body.title,
			runtimeMins: req.body.runtimeMins,
		},
	});
	res.json({ updatedMovie });
};

module.exports = {
    getMovies,
    createMovie,
    getMovieById,
    updateMovieById
  };