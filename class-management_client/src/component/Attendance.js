import React, { useEffect, useState } from 'react';

const Attendances = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const editData = (id) =>{
        try {
            const response =  fetch(`${id}`);
            console.log("response",response)
         
        } catch (error) {
            console.error('Error fetching the attendances data:', error);
        }
    };
    
    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                console.log("response",response)
                const result = await response.json();
                setAttendanceData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the attendances data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>Attendance</h1>
            <table>
                <thead>
                    <th>attendance_id</th>
                    <th>attendance_name</th>
                    <th>student_id</th>
                    <th>subject_id</th>
                    <th>date</th>
                </thead>
                <tbody> 

                    {attendanceData.map((attendance) => (
                    <tr key={attendance.id}>
                            <td>
                            {attendance.attendance_id}
                         </td><td>
                            {attendance.attendance_name}
                         </td><td>
                            {attendance.student_id}
                         </td><td>
                            {attendance.subject_id}
                         </td><td>
                            {attendance.date}
                         </td>
                         <td>
                            <button onClick={()=>{editData(attendance)}}>Edit</button>
                         </td>
                            </tr>
                        
                        ))}

                   
                </tbody>
            </table>
           
        </div>
    );
};

export default Attendances;




