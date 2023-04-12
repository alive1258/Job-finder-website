import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({addJob}) => {
    const {_id,picture,jobType1,jobType2,jobTitle,company,location,salary}=addJob
    return (
        <div>
           <div className='border-2 border-gray-400 w-full  p-4 m-4'>
           <div className='flex justify-between'>
            
                <div className='flex gap-4'>
                <img className='w-28 h-28' src={picture} alt="" />
                <div>
                    <p>{jobTitle}</p>
                    <p>{company}</p>
                    <div className='flex gap-4'>
                        <p className='border-2 border-[#7E90FE] text-[#9873FF] px-2'>{jobType1}</p>
                        <p className='border-2 border-[#7E90FE] text-[#9873FF] px-2'>{jobType2}</p>
                    </div>
                    <div>
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
                </div>
          
          
            <div className='flex items-center'>
                <Link to={`/job/${_id}`} className='p-4 bg-[#7E90FE] text-white rounded-lg'>View Details</Link>
            </div>
          
           
            </div>
           </div>
           
        </div>
    );
};

export default JobList;