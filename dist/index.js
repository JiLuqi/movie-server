"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const MovieService_1 = require("./services/MovieService");
const Movie_1 = require("./entities/Movie");
const m = new Movie_1.Movie({
    name: '123',
    timeLong: 465,
    poster: '456'
});
MovieService_1.MovieService.addMovie(m).then(res => {
    console.log(res);
});
