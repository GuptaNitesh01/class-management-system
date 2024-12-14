
async function main(req,res){
    const student_id=req.query.student_id;
    const exam_id=req.query.exam_id; 
    const marks=req.query.marks;
    console.log(student_id,exam_id,marks);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO student_exams (student_id,exam_id,marks)  values($1,$2,$3)', 
    [student_id,exam_id,marks]
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



