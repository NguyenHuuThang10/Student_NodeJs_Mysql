const Students = require("../models/Students");
const { sequelizeToObject } = require("../../util/sequelize");
class SiteController {
  // [GET] /
  index(req, res, next) {
    res.render("home");
  }

  show(req, res, next) {
    Students.findOne({ where: { courseId: req.body.courseId, msv: req.body.msv }})
        .then((student) => {
            if(student) {
              res.json({ student: sequelizeToObject(student) });
            }else{
              res.json({ student: null });
            }
        })
        .catch(next);
}
} 

module.exports = new SiteController();
