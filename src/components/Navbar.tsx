import Link from "next/link";
import MainButton from "./MainButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"

export default async function Navbar() {
  const session = await getServerSession(authOptions)
  console.log(session === null ? 'Problem' : session.user.username)
  return (
    <div style={{backgroundColor: '#111'}} className='top-0 py-3 flex items-center justify-center w-full box-border absolute'>
      <div className="flex items-center w-11/12 justify-between" style={{maxWidth: 1600}}>
        <Link href='/' className='text-white text-xl tracking-wide'>BlogApp</Link>
        {session?.user
        ? <MainButton link={'/admin'} title='Profile' color='blue'/>
        : <MainButton link={'/sign-in'} title='Sign in' color='blue'/>}     
      </div>
    </div>
  )
}
