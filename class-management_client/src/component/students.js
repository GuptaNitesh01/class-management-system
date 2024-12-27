import React, { useEffect, useState } from 'react';

const Students = () => {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('http://localhost:9998/reading_exam');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setStudentData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the students data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>students</h1>
            <ul>
                {studentData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Students;




