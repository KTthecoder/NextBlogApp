import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot password | NextBlog',
  description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.',
}

const page = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 lg:mt-28">
        <h2 className="text-white text-2xl tracking-wider border-b-[rgb(45,45,45)] border-b-2 w-72 text-center pb-4 sm:w-96">Forgot Password</h2>
        <p className="text-white text-lg tracking-wider w-72 pb-4 sm:w-96 mt-4">If you have forgotten your password, enter the email address where instructions to recover it should arrive.</p>
        <form className="flex flex-col mt-3">
          <label className="text-gray-100 pb-2 tracking-wide font-medium">Email address</label>
          <input type="text" placeholder="john@mail.com" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
          <button type="submit" className="bg-blue-500 w-72 sm:w-96 py-3 text-lg text-white mt-2
          rounded-md tracking-wide hover:bg-blue-700 transition-all duration-500 ease-in-out">Send email</button>
        </form>
        <Link href='/sign-in' className=" text-lg text-blue-500 w-72 sm:w-96
        mt-4 rounded-md tracking-wide hover:text-blue-700 transition-all duration-500 ease-in-out">Go back</Link>
      </div>
    </div>
  )
}

export default page