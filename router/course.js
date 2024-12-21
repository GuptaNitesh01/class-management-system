module.exports = function (app) {
    app.post('/create_courses', (req, res) => {
        let x = require("../src/courses/create_courses");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_courses', (req, res) => {
        let x = require("../src/courses/update_courses");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_courses', (req, res) => {
        let x = require("../src/courses/delete_courses");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_courses', (req, res) => {
        let x = require("../src/courses/read_courses");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_courses', (req, res) => {
        let x = require("../src/courses/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
   
}