import Link from "next/link"
import { Metadata } from 'next'
import RegisterForm from "@/components/RegisterForm"

export const metadata: Metadata = {
  title: 'Register | NextBlog',
  description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.'
}

const page = () => {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 xl:mt-20">
          <h2 className="text-white text-2xl tracking-wider border-b-[rgb(45,45,45)] border-b-2 w-72 text-center pb-4 sm:w-96">Create account</h2>
          <RegisterForm/>
          <Link href='/sign-in' className="bg-green-500 w-72 sm:w-96 py-3 text-lg text-center
          text-white mt-6 rounded-md tracking-wide hover:bg-green-700 transition-all duration-500 ease-in-out">Sign In</Link>
        </div>
      </div>
    )
  }
  
  export default page