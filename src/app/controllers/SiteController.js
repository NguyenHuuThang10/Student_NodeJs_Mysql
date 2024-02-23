const Students = require("../models/Students");
// const { sequelizeToObject } = require("../../util/sequelize");
class SiteController {
  // [GET] /
  index(req, res, next) {
    res.render("home");
  }

  // [POST] /search
  // show(req, res, next) {
  //   Students.findOne({ where: { courseId: req.body.courseId }})
  //     .then((student) => {


  //       res.render('home', { student: student.get({ plain: true }) })
  //     })
  //     .catch(next);
  // }

  show(req, res, next) {
    Students.findOne({ where: { courseId: req.body.courseId, msv: req.body.msv }})
        .then((student) => {
            res.json({ student: student.get({ plain: true }) });
        })
        .catch(next);
}
} 

module.exports = new SiteController();
