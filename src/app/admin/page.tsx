import Link from "next/link"
import { AiOutlineLike, AiOutlineCalendar } from 'react-icons/ai'
import { FaRegComments } from 'react-icons/fa'
import userImg from '../../static/user.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin| NextBlog',
    description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.'
  }

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-12">
        <h1>Admin Panel</h1>
    </div>
  )
}

export default page