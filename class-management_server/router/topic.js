module.exports = function (app) {
    app.post('/create_topic', (req, res) => {
        let x = require("../src/topics/create_topic");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_topic', (req, res) => {
        let x = require("../src/topics/update_topic");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_topic', (req, res) => {
        let x = require("../src/topics/delete_topic");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_topic', (req, res) => {
        let x = require("../src/topics/read_topic");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_topics', (req, res) => {
        let x = require("../src/topics/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
}