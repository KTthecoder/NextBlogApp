'use client'
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from "react";

type CategoriesType = {
    slug: string,
    color: string,
    name: string
}

const CreateArticleForm = () => {
    const router = useRouter()
    const [categories, setCategories] = useState<CategoriesType[]>([])
    const [pickedCategory, setPickedCategory] = useState('')

    const getCategories = async () => {
        const res = await fetch('http://localhost:3000/api/category', {
            method: 'GET',    
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await res.json()

        if(res.ok){
            setCategories(data)
            setPickedCategory(data[0].slug)
        }
        else{
            console.log('Cannot get categories from server!')
        }
    }

    useEffect(() => {
        getCategories()
        
    }, [])

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const res = await fetch('http://localhost:3000/api/article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                articleData: {
                    title: formData.get('title'),
                    shortDesc: formData.get('shortDesc'),
                    body: formData.get('body'),
                    slug: formData.get('title')?.toString().replaceAll(' ', '-').toLowerCase().toString(),
                },
                categoryData: {
                    slug: pickedCategory,
                }   
            })
        })
    
        if(res.ok){
            alert('Article created succesfully')
            router.refresh()
            router.push('/')
        } else {
            alert('error occured')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center max-w-[370px] md:max-w-[450px]">
            <input type="text" name="title" className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" placeholder="Title"/>
            <select className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" onChange={(e) => setPickedCategory(e.target.value)}>
                {categories.length > 0 ?
                    categories.map((item) => (
                        <option value={item.slug}>{item.name}</option>
                    ))
                : null}
            </select>
            <textarea rows={3} name="shortDesc" className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" placeholder="Short description"></textarea>
            <textarea name="body" rows={3} className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" placeholder="Body"></textarea>
            <button type="submit" className="bg-blue-500 text-white w-full rounded-md py-2 text-lg md:py-3 tracking-wide max-w-[370px] md:max-w-[450px]">Create</button>
        </form>
    )
}

export default CreateArticleForm