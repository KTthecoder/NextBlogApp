import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

type paramsType = {
    params: {
        slug: string
    }
}

type ArticleType = {
    title: string,
    shortDesc: string,
    body: string,
    slug: string,
}

type CategoryData = {
    slug: string,
}

export async function GET(req:Request, params:paramsType){
    try{
        const session = await getServerSession()
    
        const article = await prisma.article.findUnique({where: {
            slug: params.params.slug,
            userId: session?.user.id
        }, select: {
            title: true,
            shortDesc: true,
            body: true,
            slug: true,
            category: {
                select: {
                    name: true,
                    slug: true
                }
            }
        }})

        if(article === null){
            return NextResponse.json({message: 'Article with that slug does not exists'})
        }

        return NextResponse.json(article, {status: 200})
    }
    catch (error){
        return NextResponse.json({message: 'Error while making API request'}, {status: 500})
    }
}

export async function PUT(req:Request, params:paramsType){
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

        await prisma.article.update({where: {
            slug: params.params.slug
        }, data: {
            articleCategoryId: category.id,
            title: article.title,
            shortDesc: article.shortDesc,
            body: article.body
        }})

        return NextResponse.json({message: 'Article created successfully'}, {status: 201})
    }
    catch (error){
        return NextResponse.json({message: 'Error while making API request'}, {status: 500})
    }
}