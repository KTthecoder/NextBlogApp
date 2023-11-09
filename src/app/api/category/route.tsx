import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    const categories = await prisma.articleCategory.findMany({select: {
        slug: true,
        name: true,
    }})

    return NextResponse.json(categories)
}

export async function POST(req:Request){
    const data = await req.json()
    const category = await prisma.articleCategory.create({data: data})

    return NextResponse.json(category)
}