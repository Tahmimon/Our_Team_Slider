import React from 'react'
import Card from './Card';

const TeamGraph = () => {
  return (
    <>
      <div className=''>
        <div className='flex flex-col justify-center items-center'>
          <Card />
          <svg className="h-full w-2">
          <line x1="1" y1="0" x2="1" y2="100%" stroke="#E2E8F0" strokeWidth="5" />
        </svg>
        <svg className="h-2 w-200">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#E2E8F0" strokeWidth="5" />
        </svg>
        <svg className="h-20 w-2">
          <line x1="11" y1="0" x2="11" y2="100%" stroke="#E2E8F0" strokeWidth="5" />
        </svg>
        
        </div>
      </div>
      <div className='my-10 space-x-4 flex flex-row justify-center items-center'>
      
        <Card />
        <Card />
        
      </div>
      <svg className="h-2 w-full">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#E2E8F0" strokeWidth="5" />
        </svg>
      <div className='my-10 space-x-4 flex flex-row justify-center items-center'>
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default TeamGraph
