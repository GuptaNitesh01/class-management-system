
// async function main (req,res){
//     const student_id = req.query.id;
//     const student_name = req.query.name;
//     const student_age = req.query.age;
//     const student_department = req.body;

//        const {getPGConnection} = require("../base/pg_connector")
//        const client =await getPGConnection();
//        console.log("CLIENT",client)
//           await client.query('INSERT INTO classmanagement (name,id, age,department) VALUES ($1,$2,$3,$4)', 
//             [student_id,student_name,student_age,student_department],async function(err,data){
//               if(data){
//                   res.send('data');
//               }
//               else{
//                   res.send(err);
//                   console.log(err);
//               }
//               await client.end() 
//           })
    
// }
// module.exports={
//     main
// }

// const { getPGConnection } = require("../base/pg_connector");

// async function main(req, res) {
//     const student_id = req.body.id;
//     const student_name = req.body.name;
//     const student_age = req.body.age;
//     const student_department = req.body.department; // Extract department correctly

//     let client;

//     try {
//         client = await getPGConnection();
//         console.log("CLIENT", client);

//         await client.query(
//             'INSERT INTO classmanagement (id, name, age, department) VALUES ($1, $2, $3, $4)',
//             [student_id, student_name, student_age, student_department]
//         );
//         res.status(200).send("Data inserted successfully");
//     } catch (err) {
//         console.error("Error occurred", err);
//         res.status(500).send(err.message);
//     } finally {
//         if (client) {
//             await client.end();
//         }
//     }
// }

// module.exports = {
//     main
// };

async function main(req,res){
    const student_id=req.body.student_id;
    const student_name=req.body.student_name; 
    const student_age=req.body.student_age;
    const student_department=req.body.student_department;

const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
// const result= await client.query('INSERT INTO student(s_id,s_name,city,marks,misc) VALUES($1,$2,$3,$4,$5)', [s_id,s_name,city,marks,misc]
const result= await client.query('insert into classmanagement(student_id,student_name,student_age,student_department)  values($1,$2,$3,$4)', 
    [student_id,student_name,student_age,student_department]

    ,function(err,data){
    if(err){
        console.log("Error",err);
        res.send(`ERROR in inserting the vlaue:-  ${err}`);
    } else{
        if(res.send){
            res.send(`Data inserted successfully:- ${data}`)
        }
    }

     client.end();
}
);

}
module.exports={
main
}




// app.get('/students', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM students');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });