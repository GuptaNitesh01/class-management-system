module.exports = function (app) {
    app.get('/create_topic', (req, res) => {
        let x = require("../src/topics/creaing_topics");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/update_topic', (req, res) => {
        let x = require("../src/topics/updating_topics");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/delete_topic', (req, res) => {
        let x = require("../src/topics/deleting_topics");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_topic', (req, res) => {
        let x = require("../src/topics/reading_topics");
        console.log("X", x)
        x.main(req, res);
    })
   
}