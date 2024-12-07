module.exports = function (app) {
    app.get('/create_admission', (req, res) => {
        let x = require("../src/admissions/creating_admission");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/update_admission', (req,res)=>{
        let x = require("../src/admissions/updating_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.get('/delete_admission', (req,res)=>{
        let x = require("../src/admissions/deleting_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.get('/read_admission', (req,res)=>{
        let x = require("../src/admissions/reading_admission");
        console.log("X",x)
        x.main(req,res);
    })
   
}