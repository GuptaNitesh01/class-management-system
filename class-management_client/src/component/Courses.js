import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
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
            <h1>Course</h1>
            <ul>
                {courseData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;




