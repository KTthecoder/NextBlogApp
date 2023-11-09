'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from "react";

type CategoriesType = {
    slug: string,
    color: string,
    name: string
}

type ArticleType = {
    title: string,
    shortDesc: string,
    body: string,
    slug: string,
    category: {
        name: string,
        slug: string
    }
}

type Props = {
    slug: string
}

const EditArticleForm = ({slug}:Props) => {
    const router = useRouter()
    const [categories, setCategories] = useState<CategoriesType[]>([])
    const [pickedCategory, setPickedCategory] = useState('')
    const [article, setArticle] = useState<ArticleType>({
        title: '',
        shortDesc: '',
        body: '',
        slug: '',
        category: {
            name: '',
            slug: ''
        }
    })

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
            
        }
        else{
            console.log('Cannot get categories from server!')
        }
    }

    const getArticle = async () => {
        const res = await fetch(`http://localhost:3000/api/article/${slug}`, {
            method: 'GET',    
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await res.json()

        if(res.ok){
            setArticle(data)
            setPickedCategory(data.category.slug)
        }
        else{
            console.log('Cannot get article from server!')
        }
    }

    useEffect(() => {
        getArticle()
        getCategories()
    }, [])

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const res = await fetch(`http://localhost:3000/api/article/${slug}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                articleData: {
                    title: formData.get('title'),
                    shortDesc: formData.get('shortDesc'),
                    body: formData.get('body'),
                    slug: formData.get('title')?.toString().replaceAll(' ', '-').toLowerCase().toString(),
                },
                categoryData: {
                    slug: formData.get('categorySelect'),
                }   
            })
        })
    
        if(res.ok){
            alert('Article edited succesfully')
            router.refresh()
            router.push('/')
        } else {
            alert('error occured')
        }
        console.log(formData.get('categorySelect'))
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center max-w-[370px] md:max-w-[450px]">
            <input type="text" name="title" className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" onChange={(e) => {
                setArticle({
                    title: e.target.value,
                    body: article.body,
                    category: article.category,
                    shortDesc: article.shortDesc,
                    slug: article.slug
                })
            }} defaultValue={article.title} placeholder="Title"/>
            <select name='categorySelect' className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" value={pickedCategory} onChange={(e) => {
                setPickedCategory(e.target.value)
            }}>
                {categories.length > 0 ?
                    categories.map((item) => (
                        <option value={item.slug}>{item.name}</option>
                    ))
                : null}
            </select>
            <textarea rows={3} name="shortDesc" defaultValue={article.shortDesc} onChange={(e) => {
                setArticle({
                    title: article.title,
                    body: article.body,
                    category: article.category,
                    shortDesc: e.target.value,
                    slug: article.slug
                })
            }} className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" placeholder="Short description"></textarea>
            <textarea name="body" rows={3} defaultValue={article.body} onChange={(e) => {
                setArticle({
                    title: article.title,
                    body: e.target.value,
                    category: article.category,
                    shortDesc: article.shortDesc,
                    slug: article.slug
                })
            }} className="w-full px-3 py-2 rounded-md outline-none border-none mb-4" placeholder="Body"></textarea>
            <button type="submit" className="bg-blue-500 text-white w-full rounded-md py-2 text-lg md:py-3 tracking-wide max-w-[370px] md:max-w-[450px]">Create</button>
        </form>
    )
}

export default EditArticleForm