import Link from "next/link"
import { Metadata } from 'next'
import RegisterForm from "@/components/RegisterForm"
import EditProfileForm from "@/components/EditProfileForm"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: 'Edit Profile | NextBlog',
  description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.'
}

const page = async () => {
    const session = await getServerSession(authOptions)

    return (
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 xl:mt-20">
          <h2 className="text-white text-2xl tracking-wider border-b-[rgb(45,45,45)] border-b-2 w-72 text-center pb-4 sm:w-96">Edit Profile</h2>
          <EditProfileForm username={session?.user.username}/>
        </div>
      </div>
    )
  }
  
  export default page