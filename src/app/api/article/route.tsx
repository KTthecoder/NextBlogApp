import prisma from "@/lib/db";
import { NextResponse } from "next/server";

type ArticleType = {
    title: string,
    shortDesc: string,
    body: string,
    slug: string,
}

type CategoryData = {
    slug: String,
}

export async function POST(req:Request){
    try{
        const { articleData, categoryData } = await req.json()
        const article:ArticleType = articleData
        const categorySlug:CategoryData = categoryData
        console.log(articleData)
        console.log(categoryData)
    
        const category = await prisma.articleCategory.findUnique({where: {
            slug: categorySlug.slug.toString()
        }})
        if(category === null){
            return NextResponse.json({message: 'Category with that slug does not exists'})
        }

        const articleSlug = await prisma.article.findUnique({where: {
            slug: article.slug.toString()
        }})
        if(articleSlug != null){
            return NextResponse.json({message: 'Article with that slug already exists'})
        }

        await prisma.article.create({data: {
            title: article.title, shortDesc: article.shortDesc,
            body: article.body, slug: article.slug, 
            category: {connect: {slug: category.slug}}, 
            user: {connect: {id: '36408a44-bda7-40b3-863f-9835470dbec8'}}
        }})

        return NextResponse.json({message: 'Article created successfully'}, {status: 201})
    }
    catch (error){
        return NextResponse.json({message: 'Error while making API request'}, {status: 500})
    }
}