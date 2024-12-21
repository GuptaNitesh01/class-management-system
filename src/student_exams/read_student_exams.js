async function main (req,res){
    
    const {getPGConnection} = require("../base/pg_connector")
    const client =await getPGConnection();
    console.log("CLIENT",client)
    
       await client.query(`SELECT  "student_id","exam_id","marks" FROM "student_exams";`, [],async function(err,data){
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