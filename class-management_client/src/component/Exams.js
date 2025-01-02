import React, { useEffect, useState } from 'react';

const Exams = () => {
    const [examData, setExamData] = useState([]);
    const editData = (id) =>{
        try {
            const response =  fetch(`${id}`);
            console.log("response",response)
         
        } catch (error) {
            console.error('Error fetching the EXAMS data:', error);
        }
    };

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('http://localhost:9998/reading_exam');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setExamData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the exams data:', error);
            }
        };

        apicall();
    }, []);


     return (
        <div>
            <h1>Exams</h1>
            <table>
                <thead>
                    <th>exam_id</th>
                    <th>exam_name</th>
                    <th>date</th>
                    <th>subject_id</th>
                   
                </thead>
                <tbody> 

                    {examData.map((item, index) => (
                                            <tr>
                            <td>
                            {item.exam_id}
                         </td><td>
                            {item.exam_name}
                         </td><td>
                            {item.date}
                         </td><td>
                            {item.subject_id}
                         </td>
                         <td>
                            <button onClick={()=>{editData(item.exam_id)}}>Edit</button>
                         </td>
                            </tr>
                        
                        ))}

                   
                </tbody>
            </table>
           
        </div>
    );
};

export default Exams;




