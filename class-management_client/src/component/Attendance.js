import React, { useEffect, useState } from 'react';

const Attendances = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
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
            <h1>Attendances</h1>
            <ul>
                {attendanceData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Attendances;




