const main =async(req,res)=>{
    const {admission_id}=req.query;
    const {getPGConnection} = require("../base/pg_connector"); 
    const client=await getPGConnection();
    client.query("SELECT * FROM admissions WHERE admission_id=$1",[admission_id],function(err,result){
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