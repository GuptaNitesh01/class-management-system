async function main (req,res){
  
    const student_id = req.query.student_id;
    const student_name = req.query.student_name;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.students SET student_name=$1 WHERE Student_id = $2;`, [student_name,student_id],async function(err,data){
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




// app.post('/api/students', async (req, res) => {
//     const { student_name, student_age, student_department } = req.body;
//     try {
//       const result = await pool.query(
//         'INSERT INTO students (student_name, student_age, student_department) VALUES ($1, $2, $3) RETURNING *',
//         [student_name, student_age, student_department]
//       );
//       res.status(201).json(result.rows[0]);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });