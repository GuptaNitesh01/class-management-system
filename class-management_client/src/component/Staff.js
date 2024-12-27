import React, { useEffect, useState } from 'react';

const Staffs = () => {
    const [staffData, setStaffData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setStaffData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the staffs data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>staffs</h1>
            <ul>
                {staffData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Staffs;




