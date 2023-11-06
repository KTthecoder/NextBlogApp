import { Metadata } from 'next'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const metadata: Metadata = {
    title: 'Admin | NextBlog',
    description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.'
}

const page = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)

    if(session?.user){
        return (
            <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-12">
                <h1>Admin Panel</h1>
            </div>
        )
    }

    return (
        <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-12">
            <h1>You don't have access to this page</h1>
        </div>
    )
}

export default page