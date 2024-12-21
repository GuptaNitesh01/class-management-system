
async function main(req,res){
    const exam_id=req.query.exam_id;
    const exam_name=req.query.exam_name; 
    const date=req.query.date;
    const subject_id=req.query.subject_id;
    console.log(exam_id,exam_name,date,subject_id);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO exams (exam_id,exam_name,date,subject_id)  values($1,$2,$3,$4)', 
    [exam_id,exam_name,date,subject_id]
    ,function(err,data){
    if(err){
        console.log("Error",err);
        res.send(`ERROR in inserting the vlaue:-  ${err}`);
    } else{
        if(res.send){
            res.send(`Data inserted successfully:- ${JSON.stringify(result)}`)
        }
    }

     client.end();
}
);

}
module.exports={
    main
}