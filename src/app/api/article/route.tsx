import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
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
        const session = await getServerSession(authOptions)
        const { articleData, categoryData } = await req.json()
        const article:ArticleType = articleData
        const categorySlug:CategoryData = categoryData
    
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
            user: {connect: {id: session?.user.id}}
        }})

        return NextResponse.json({message: 'Article created successfully'}, {status: 201})
    }
    catch (error){
        return NextResponse.json({message: 'Error while making API request'}, {status: 500})
    }

    // Create post default data with session token user
    // const session = await getServerSession(authOptions)

    // await prisma.article.create({data: {
    //     title: 'Article 1', shortDesc: 'Short description of article 1',
    //     body: 'Body of article 1', slug: 'article-1', 
    //     category: {connect: {slug: 'technology'}},
    //     user: {connect: {id: session?.user.id}}
    // }})

    // return NextResponse.json({message: 'Article created successfully'}, {status: 201})
}

export async function DELETE(req:Request){
    try{
        const { slug } = await req.json()
        
        const article = await prisma.article.findUnique({where: {
            slug: slug
        }})

        if(article === null){
            return NextResponse.json({message: 'Article with that slug does not exists'})
        }

        await prisma.article.delete({where: {
            slug: slug
        }})

        return NextResponse.json({message: 'Article deleted successfully'}, {status: 200})
    }
    catch (error){
        return NextResponse.json({message: 'Error while making API request'}, {status: 500})
    }
}