import React from 'react'
import userImg from '../static/user.jpg'

type Props = {}

const DashboardUser = (props: Props) => {
  return (
    <div className='flex flex-col items-center mt-3 border-[#222] border-2 rounded-md justify-center py-5 sm:flex-row sm:w-[420px] sm:py-6'>
      <img src={userImg.src} alt='user' className='w-14 h-14 rounded-full justify-center'/>
      <div className='flex flex-col justify-center mt-3 sm:mt-0 sm:ml-3 sm:mr-5'>
        <p className='text-white tracking-wide text-md text-center sm:text-start'>Ksawery</p>
        <p className='text-gray-300 tracking-wide text-md text-center sm:text-start'>ksawery@gmail.com</p>
      </div>
      <button className='bg-blue-500 rounded-md px-6 py-2 mt-3 tracking-wide text-base box-border sm:mt-0
      transition-all duration-500 shadow-sm hover:rounded-xl text-white'>Edit Profile</button>
    </div>
  )
}

export default DashboardUser