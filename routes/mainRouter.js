const home = require('./homeRoute');
const about = require('./aboutRouter');
const add = require('./addRouter');
const courses = require('./coursesRouter');

module.exports = {
    home: home,
    about: about,
    add: add,
    courses: courses
}