import Link from "next/link";
import MainButton from "./MainButton";

export default function Navbar() {
  return (
    <div className='flex items-center justify-center w-full mt-5 box-border'>
      <div className="flex items-center w-11/12 justify-between" style={{maxWidth: 1600}}>
        <Link href='/' className='text-white text-xl tracking-wide'>BlogApp</Link>
        <MainButton link={'/profile'} title='Profile' color='blue'/>
      </div>
    </div>
  )
}
