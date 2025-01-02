import React, { useEffect, useState } from 'react';

const Branches = () => {
    const [branchData, setBranchData] = useState([]);
    const editData = (id) =>{
        try {
            const response =  fetch(`${id}`);
            console.log("response",response)
         
        } catch (error) {
            console.error('Error fetching the branches data:', error);
        }
    };

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('');
                console.log("response",response)
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
            <h1>Branches</h1>
            <table>
                <thead>
                    <th>branch_id</th>
                    <th>branch_name</th>
                    <th>branch_code</th>
                    <th>location</th>
                    <th>student_id</th>
                    <th>head_of_branch</th>
                    <th>contact_number</th>
                </thead>
                <tbody> 

                    {branchData.map((branch) => (
                    <tr key={branch.id}>
                            <td>
                            {branch.branch_id}
                         </td><td>
                            {branch.branch_name}
                         </td><td>
                            {branch.branch_code}
                         </td><td>
                            {branch.location}
                         </td><td>
                            {branch.student_id}
                         </td>
                         <td>
                            {branch.head_of_branch}
                         </td>
                         <td>
                            {branch.contact_number}
                         </td>
                         <td>
                            <button onClick={()=>{editData(branch)}}>Edit</button>
                         </td>
                            </tr>
                        
                        ))}

                   
                </tbody>
            </table>
           
        </div>
    );
};

export default Branches;




