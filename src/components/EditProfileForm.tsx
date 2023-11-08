'use client'
import Link from "next/link"
import { signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from "react";

type Props = {
    username: string | undefined
}

const EditProfileForm = ({username}: Props) => {
  const router = useRouter()
  const [newUsername, setNewUsername] = useState(username)

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const res = await fetch('http://localhost:3000/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.get('username'),
          oldPassword: formData.get('oldPassword'),
          newPassword: formData.get('newPassword')
        })
    })
  
    if(res.ok){
        signOut({ redirect: false }).then(() => {
            router.refresh()
            router.push("/sign-in");
        });
    } else {
      alert('error occured')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-7">
        <label className="text-gray-100 pb-2 tracking-wide font-medium">Username</label>
        <input type="text" name="username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder="ksawery7865" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
        <label className="text-gray-100 pb-2 tracking-wide font-medium">Old Password</label>
        <input type="password" name="oldPassword" placeholder="old password" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md mb-4 outline-none"/>
        <label className="text-gray-100 pb-2 tracking-wide font-medium">New Password</label>
        <input type="password" name="newPassword" placeholder="new password" className="w-72 sm:w-96 px-4 py-3 text-lg rounded-md outline-none"/>
        <button type="submit" className="bg-blue-500 w-72 sm:w-96 py-3 text-lg text-white mt-8 rounded-md tracking-wide">Change data</button>
    </form>
  )
}

export default EditProfileForm