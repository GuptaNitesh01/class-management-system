const main =async(req,res)=>{
    const {exam_id}=req.params;
    const {getPGConnection} = require("../base/pg_connector"); 
    const client=await getPGConnection();
    client.query("SELECT * FROM exams WHERE exam_id=$1",[exam_id],function(err,result){
        if(err){
            console.log("err",err);
            res.send(err.toString());
        } else{
            console.log("result",result);
            res.send(result.rows);
    
        }
    });
    }
    module.exports={
        main
    }