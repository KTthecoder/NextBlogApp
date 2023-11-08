'use client'
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { FormEvent } from "react";

const SignInForm = () => {
  const router = useRouter()

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const signInData = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })
  
    if(!signInData?.ok){
      console.log('error occured')
    } else {
      router.refresh()
      router.push('/admin')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-7">
      <label className="text-gray-100 pb-2 tracking-wide font-medium">Email address</label>
      <input type="text" name="email" placeholder="john@mail.com" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
      <div className="flex justify-between items-center pb-2">
      <label className="text-gray-100 tracking-wide font-medium">Password</label>
      <Link href='forgot-password' className="text-blue-500 hover:text-blue-400 duration-300 transition-all ease-in-out">Forgot Password?</Link>
      </div>
      <input type="password" name="password" placeholder="password" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md outline-none"/>
      <button type="submit" className="bg-blue-500 w-72 sm:w-96 py-3 text-lg text-white mt-8
      rounded-md tracking-wide hover:bg-blue-700 transition-all duration-500 ease-in-out">Sign In</button>
    </form>
  )
}

export default SignInForm