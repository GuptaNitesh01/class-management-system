module.exports = function (app) {
    app.post('/create_admission', (req, res) => {
        let x = require("../src/admissions/create_admission");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_admission', (req,res)=>{
        let x = require("../src/admissions/update_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.delete('/delete_admission', (req,res)=>{
        let x = require("../src/admissions/delete_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.get('/read_admission', (req,res)=>{
        let x = require("../src/admissions/read_admission");
        console.log("X",x)
        x.main(req,res);
    })
    app.get('/get_by_list', (req,res)=>{
        let x = require("../src/admissions/get_by_list");
        console.log("X",x)
        x.main(req,res);
    })
}