async function main (req,res){
    
    const {getPGConnection} = require("../base/pg_connector")
    const client =await getPGConnection();
    console.log("CLIENT",client)
    
       await client.query(`SELECT  "exam_id","exam_name","date","subject_id" FROM "exams";`, [],async function(err,data){
           if(data){
               res.send(data.rows);
           }
           else{
               res.send(err);
               console.log(err);
           }
           await client.end() 
       })
 
}
module.exports={
 main
}

