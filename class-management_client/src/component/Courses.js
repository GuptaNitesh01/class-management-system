import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    const editData = (id) =>{
        try {
            const response =  fetch(`${id}`);
            console.log("response",response)
         
        } catch (error) {
            console.error('Error fetching the courses data:', error);
        }
    };
    

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                console.log("response",response);
                const result = await response.json();
                setCourseData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the Course data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            <table>
                <thead>
                    <th>course_id</th>
                    <th>course_name</th>
                    <th>course_duration</th>
                    <th>course_fees</th>
                   
                </thead>
                <tbody> 

                    {courseData.map((item, index) => (
                                            <tr>
                            <td>
                            {item.course_id}
                         </td><td>
                            {item.course_name}
                         </td><td>
                            {item.course_duration}
                         </td><td>
                            {item.course_fees}
                         </td>
                         <td>
                            <button onClick={()=>{editData(item.course_id)}}>Edit</button>
                         </td>
                            </tr>
                        
                        ))}

                   
                </tbody>
            </table>
           
        </div>
    );
};

export default Courses;




