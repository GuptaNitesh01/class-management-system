
async function main(req,res){
    const staff_id=req.query.staff_id;
    const staff_name=req.query.staff_name; 
    const staff_age=req.query.staff_age;
    const staff_salary=req.query.staff_salary;
    console.log(staff_id,staff_name, staff_age ,staff_salary);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO staffs ( staff_id,staff_name, staff_age ,staff_salary)  values($1,$2,$3,$4)', 
    [ staff_id,staff_name, staff_age ,staff_salary]
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



