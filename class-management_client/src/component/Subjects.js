import React, { useEffect, useState } from 'react';

const Subjects = () => {
    const [subjectData, setSubjectData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('http://localhost:9998/read_subject');
                console.log("response",response)
                const result = await response.json();
                setSubjectData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the Subjects data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>Subjects</h1>
            <table>
                <thead>
                    <th>subject_id</th>
                    <th>subject_name</th>
                    <th>subject_topics</th>
                    <th>subject_code</th>
                   
                </thead>
                <tbody> 
                    {
                        console.log("subjectData test 3,",subjectData)
                    }

                    {/* {subjectData.length>0&&subjectData.map((item, index) => (
                                            <tr>
                            <td>
                            {item.subject_id}
                         </td><td>
                            {item.subject_name}
                         </td><td>
                            {item.subject_topics}
                         </td><td>
                            {item.subject_code}
                         </td>
                            </tr>
                        
                        ))} */}

                   
                </tbody>
            </table>
           
        </div>
    );
};

export default Subjects;




