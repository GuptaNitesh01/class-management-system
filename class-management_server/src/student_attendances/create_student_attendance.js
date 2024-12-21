
async function main(req,res){
    const student_attendance_id=req.query.student_attendance_id;
    const student_attendance_name=req.query.student_attendance_name; 
    const student_id=req.query.student_id;
    const subject_id=req.query.subject_id;
    const date = req.query.date;
    console.log(student_attendance_id,student_attendance_name,student_id,subject_id,date);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO student_attendances (student_attendance_id,student_attendance_name,student_id,subject_id,date)  values($1,$2,$3,$4,$5)', 
    [student_attendance_id,student_attendance_name,student_id,subject_id,date]
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