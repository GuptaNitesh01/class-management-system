import React, { useEffect, useState } from 'react';
// import './Shimmer.css'

const Admissions = () => {
    const [admissionData, setAdmissionData] = useState([]);
    const editData = (id) =>{
        try {
            const response =  fetch(`http://localhost:9998/get_by_list?admission_id=${id}`);
            console.log("response",response)
         
        } catch (error) {
            console.error('Error fetching the admissions data:', error); 
        }
    };
    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('http://localhost:9998/read_admission');
                console.log("response",response)
                const result = await response.json();
                setAdmissionData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the admissions data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>Admissions</h1>
            <table>
                <thead>
                    <th>admission_id</th>
                    <th>course_id</th>
                    <th>date</th>
                    <th>fees_paid</th>
                    <th>student_id</th>
                </thead>
                <tbody> 

                    {admissionData.map((item, index) => (
                                            <tr>
                            <td>
                            {item.admission_id}
                         </td><td>
                            {item.course_id}
                         </td><td>
                            {item.date}
                         </td><td>
                            {item.fees_paid}
                         </td><td>
                            {item.student_id}
                         </td>
                         <td>
                            <button onClick={()=>{editData(item.admission_id)}}>Edit</button>
                         </td>
                            </tr>
                        
                        ))}

                   
                </tbody>
            </table>
           
        </div>
    );
};

export default Admissions;

