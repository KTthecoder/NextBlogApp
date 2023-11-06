import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign-in | NextBlog',
  description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.'
}

const page = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 lg:mt-28">
        <h2 className="text-white text-2xl tracking-wider border-b-[rgb(45,45,45)] border-b-2 w-72 text-center pb-4 sm:w-96">Sign In</h2>
        <form className="flex flex-col mt-7">
          <label className="text-gray-100 pb-2 tracking-wide font-medium">Email address</label>
          <input type="text" placeholder="john@mail.com" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
          <div className="flex justify-between items-center pb-2">
            <label className="text-gray-100 tracking-wide font-medium">Password</label>
            <Link href='forgot-password' className="text-blue-500 hover:text-blue-400 duration-300 transition-all ease-in-out">Forgot Password?</Link>
          </div>
          <input type="password" placeholder="password" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md outline-none"/>
          <button type="submit" className="bg-blue-500 w-72 sm:w-96 py-3 text-lg text-white mt-8
          rounded-md tracking-wide hover:bg-blue-700 transition-all duration-500 ease-in-out">Sign In</button>
        </form>
        <Link href='/register' className="bg-green-500 w-72 sm:w-96 py-3 text-lg text-center
        text-white mt-6 rounded-md tracking-wide hover:bg-green-700 transition-all duration-500 ease-in-out">Create account</Link>
      </div>
    </div>
  )
}

export default page