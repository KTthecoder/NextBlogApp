'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
import prisma from '@/lib/db';

type Props = {
    title: string,
    articleSlug?: string
}

const BtnAction = ({title, articleSlug}: Props) => {
    const router = useRouter();

    return (
        <button onClick={async () => {
            if(title === 'Logout'){
                signOut({ redirect: false }).then(() => {
                    router.refresh()
                    router.push("/");
                });
            } 
            else if(title === 'Create Article'){
                router.push('/admin/create-article')
            }
            else if(title === 'Delete'){
                const res = await fetch('http://localhost:3000/api/article', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        slug: articleSlug
                    })
                })

                if(res.ok){
                    alert('Article deleted successfully')
                    router.refresh()
                }
                else{
                    alert('Cannot delete article')
                }
            }
        }} className={`${title === 'Logout' || title === 'Delete' ? 'bg-red-500' : title === 'Create Article' ? 'bg-green-600' : null} rounded-md px-6 py-2 mt-3 tracking-wide text-base box-border sm:mt-0
        transition-all duration-500 shadow-sm hover:rounded-xl text-white`}>{title}</button>
    )
}

export default BtnAction