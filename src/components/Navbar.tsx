import Link from "next/link";
import MainButton from "./MainButton";

export default function Navbar() {
  return (
    <div className='flex items-center justify-center w-screen mt-5 box-border'>
        <div className="flex items-center w-11/12 justify-between">
            <Link href='/' className='text-white text-xl tracking-wide'>BlogApp</Link>
            <MainButton link={'/profile'} title='Profile' color='blue'/>
        </div>
    </div>
  )
}
