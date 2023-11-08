import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    const categories = await prisma.articleCategory.findMany({select: {
        slug: true,
        name: true,
    }})

    return NextResponse.json(categories)
}