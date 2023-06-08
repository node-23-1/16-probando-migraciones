const express = require('express');
const productRouter = require('./product.router');
const movieRouter = require('./movie.router');
const brandRouter = require('./brand.router');
const genreRouter = require('./genre.router');
const categoryRouter = require('./category.router');
const actorRouter = require('./actor.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/products', productRouter)
router.use('/movies', movieRouter);
router.use('/brands', brandRouter);
router.use('/genres', genreRouter);
router.use('/categories', categoryRouter);
router.use('/actors', actorRouter);

module.exports = router;
