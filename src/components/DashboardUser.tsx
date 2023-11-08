import React from 'react'
import userImg from '../static/user.jpg'
import BtnAction from './BtnAction'
import MainButton from './MainButton'
import Link from 'next/link'

type Props = {
  username: string,
  email: string | undefined,
  id: string,
}

const DashboardUser = ({ username, email, id }: Props) => {
  return (
    <div className='flex flex-col items-center w-full mt-3 border-[#222] border-2 rounded-md justify-center py-5 sm:flex-row sm:w-[540px] sm:py-6'>
      <img src={userImg.src} alt='user' className='w-14 h-14 rounded-full justify-center'/>
      <div className='flex flex-col justify-center mt-3 sm:mt-0 sm:ml-3 sm:mr-5'>
        <p className='text-white tracking-wide text-md text-center sm:text-start'>{username}</p>
        <p className='text-gray-300 tracking-wide text-md text-center sm:text-start'>{email}</p>
      </div>
      <Link className='bg-blue-500 hover:bg-blue-600 rounded-md px-8 py-2 tracking-wide text-base mt-3 sm:mt-0 
      sm:mr-4 box-border transition-all duration-500 shadow-sm hover:rounded-xl text-white' href={'/admin/edit-profile'}>Edit Profile</Link>
      <BtnAction title='Logout'/>
    </div>
  )
}

export default DashboardUser