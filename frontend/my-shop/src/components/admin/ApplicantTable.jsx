import axios from 'axios';
import React, { useState } from 'react'

const ApplicantTable = (props) => {
    const [applications,setApplications]=useState(props.applications);
    const approveApplicant=async(id)=>{
        try{
            const response=await axios.put( process.env.REACT_APP_API_URL+`approve/${id}`);
            setApplications(applications.filter((applicant)=>applicant.id!=id));

        }catch(error){
            console.log(error);
        }
    }
    console.log(props);
  return (
    <div className='flex justify-center text-white text-lg'>
    <table className="ml-10 min-w-full mt-5  border-y-2 border-gray-300">
      <thead>
        <tr>
          <th className="border-b-2 p-2">Application id</th>
          <th className="border-b-2 p-2">Email</th>

          <th className="border-b-2 p-2">Name</th>
          <th className="border-b-2 p-2">Date</th>
          <th className="border-b-2 p-2">No of Attempts</th>

          
          <th className="border-b-2 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((applicant) => (
          <tr key={applicant.id}>
            <td className="border-b p-2">{applicant.id}</td>
            <td className="border-b p-2">{applicant.user.email}</td>

            
            <td className="border-b p-2">{applicant.user.name}</td>
            <td className="border-b p-2">{applicant.date}</td>
            <td className="border-b p-2">{applicant.attempts}</td>
            <td className="border-b p-2">
              <button className="bg-green-500/75 text-white px-4 py-2 mr-2" onClick={()=>approveApplicant(applicant.id)}>
                Approove
              </button>
              <button className="bg-red-500/75 text-white px-4 py-2">
                Reject
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ApplicantTable