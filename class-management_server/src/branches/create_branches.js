
async function main(req,res){
    const branch_id=req.query.branch_id;
    const branch_name=req.query.branch_name; 
    const branch_code=req.query.branch_code;
    const location=req.query.location;
    const student_id=req.query.student_id;
    const head_of_branch=req.query.head_of_branch;
    const contact_number=req.query.contact_number;

    console.log(branch_id,branch_name, branch_code ,location,student_id,head_of_branch,contact_number);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO branches ( branch_id,branch_name, branch_code ,location,student_id,head_of_branch,contact_number)  values($1,$2,$3,$4,$5,$6,$7)', 
    [ branch_id,branch_name, branch_code ,location,student_id,head_of_branch,contact_number]
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