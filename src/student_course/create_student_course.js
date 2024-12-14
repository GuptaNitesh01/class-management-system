
async function main(req,res){
    const student_id=req.query.student_id;
    const student_name=req.query.student_name; 
    const student_age=req.query.student_age;
    const student_department=req.query.student_department;
    console.log(student_id,student_name,student_age,student_department);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO students (student_id,student_name,student_age,student_department)  values($1,$2,$3,$4)', 
    [student_id,student_name,student_age,student_department]
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



