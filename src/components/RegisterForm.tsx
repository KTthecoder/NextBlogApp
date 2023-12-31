'use client'
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { FormEvent } from "react";

const RegisterForm = () => {
  const router = useRouter()

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const res = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.get('email'), 
          username: formData.get('username'),
          password: formData.get('password')
        })
    })
  
    if(res.ok){
      router.refresh()
      router.push('/sign-in')
    } else {
      alert('error occured')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-7">
      <label className="text-gray-100 pb-2 tracking-wide font-medium">Email address</label>
      <input type="text" name="email" placeholder="ksawery@mail.com" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
      <label className="text-gray-100 pb-2 tracking-wide font-medium">Username</label>
      <input type="text" name="username" placeholder="ksawery7865" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
      <label className="text-gray-100 pb-2 tracking-wide font-medium">Password</label>
      <input type="password" name="password" placeholder="password" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
      <label className="text-gray-100 pb-2 tracking-wide font-medium">Repeat Password</label>
      <input type="password" name="repeatPassword" placeholder="repeat password" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md outline-none"/>
      <button type="submit" className="bg-blue-500 w-72 sm:w-96 py-3 text-lg text-white mt-8 rounded-md tracking-wide">Create account</button>
    </form>
  )
}

export default RegisterForm