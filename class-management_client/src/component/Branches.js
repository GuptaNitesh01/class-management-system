import React, { useEffect, useState } from 'react';

const Branches = () => {
    const [branchData, setBranchData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setBranchData(result);
                console.log(result, "RESULT");
            } catch (error) {
                console.error('Error fetching the branches data:', error);
            }
        };

        apicall();
    }, []);

    return (
        <div>
            <h1>branches</h1>
            <ul>
                {branchData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Branches;




