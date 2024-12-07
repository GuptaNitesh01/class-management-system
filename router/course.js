module.exports = function (app) {
    app.get('/create_courses', (req, res) => {
        let x = require("../src/courses/creating_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/update_courses', (req, res) => {
        let x = require("../src/courses/updating_courses");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/delete_courses', (req, res) => {
        let x = require("../src/courses/deleting_courses");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_courses', (req, res) => {
        let x = require("../src/courses/reading_courses");
        console.log("X", x)
        x.main(req, res);
    })
   
}