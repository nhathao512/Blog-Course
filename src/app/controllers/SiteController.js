const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [Get] /
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses : mutipleMongooseToObject(courses)
                })
            })
            .catch(next)

        // res.render('home');
    }

    // [Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
