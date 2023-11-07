'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";

type Props = {
    title: String
}

const BtnAction = ({title}: Props) => {
    const router = useRouter();

    return (
        <button onClick={() => {
            if(title === 'Logout'){
                signOut({ redirect: false }).then(() => {
                    router.refresh()
                    router.push("/");
                });
            } 
            else if(title === 'Create Article'){
                
            }
        }} className={`${title === 'Logout' || title === 'Delete' ? 'bg-red-500' : title === 'Create Article' ? 'bg-green-600' : null} rounded-md px-6 py-2 mt-3 tracking-wide text-base box-border sm:mt-0
        transition-all duration-500 shadow-sm hover:rounded-xl text-white`}>{title}</button>
    )
}

export default BtnAction