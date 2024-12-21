const main =async(req,res)=>{
    const {course_id}=req.params;
    const {getPGConnection} = require("../base/pg_connector"); 
    const client=await getPGConnection();
    client.query("SELECT * FROM courses WHERE course_id=$1",[course_id],function(err,result){
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