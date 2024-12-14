module.exports = function (app) {
    app.post('/create_topic', (req, res) => {
        let x = require("../src/topics/creaing_topics");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_topic', (req, res) => {
        let x = require("../src/topics/updating_topics");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_topic', (req, res) => {
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