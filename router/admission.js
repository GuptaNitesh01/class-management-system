module.exports = function (app) {
    app.post('/create_admission', (req, res) => {
        let x = require("../src/admissions/creating_admission");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_admission', (req,res)=>{
        let x = require("../src/admissions/updating_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.delete('/delete_admission', (req,res)=>{
        let x = require("../src/admissions/deleting_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.get('/read_admission', (req,res)=>{
        let x = require("../src/admissions/reading_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.get('/get_byi_id', (req,res)=>{
        let x = require("../src/admissions/get_byi_id");
        console.log("X",x)
        x.main(req,res);
    })
}