
async function main(req,res){
    const staff_attendance_id=req.query.staff_attendance_id;
    const staff_id=req.query.staff_id; 
    const date=req.query.date;
    const course_id=req.query.course_id;
    console.log(staff_attendance_id,staff_id,date,course_id);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO staff_attendance (staff_attendance_id,staff_id,date,course_id)  values($1,$2,$3,$4)', 
    [staff_attendance_id,staff_id,date,course_id]
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