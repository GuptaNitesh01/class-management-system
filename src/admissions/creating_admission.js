
async function main(req,res){
    const admission_id=req.query.admission_id;
    const student_id=req.query.student_id;
    const course_id=req.query.course_id;
    const date=req.query.date;
    const fees_paid=req.query.fees_paid;
    console.log(admission_id,student_id, course_id ,date,fees_paid);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO admissions (admission_id,student_id, course_id ,date,fees_paid)  values($1,$2,$3,$4,$5)', 
    [ admission_id,student_id, course_id ,date,fees_paid]
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



