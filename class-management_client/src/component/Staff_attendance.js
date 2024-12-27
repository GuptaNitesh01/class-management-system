import React, { useEffect, useState } from 'react';

const Exams = () => {
    const [examData, setExamData] = useState([]);

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
            <ul>
                {examData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Staff_attendance;




