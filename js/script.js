const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просморенных фильмов?',''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последних просморенных фильмов?',''),
      d = prompt('на сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;    

console.log(personalMovieDB);