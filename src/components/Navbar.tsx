import Link from "next/link";
import MainButton from "./MainButton";

export default function Navbar() {
  return (
    <div style={{backgroundColor: '#111'}} className='top-0 py-3 flex items-center justify-center w-full box-border absolute'>
      <div className="flex items-center w-11/12 justify-between" style={{maxWidth: 1600}}>
        <Link href='/' className='text-white text-xl tracking-wide'>BlogApp</Link>
        {/* <MainButton link={'/profile'} title='Profile' color='blue'/> */}
        <MainButton link={'/sign-in'} title='Sign in' color='blue'/>
      </div>
    </div>
  )
}
