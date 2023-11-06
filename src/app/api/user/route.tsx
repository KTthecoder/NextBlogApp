import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt'

export async function POST(req:Request){
    try{
        const body = await req.json()
        const { email, username, password } = body
    
        const existingUserByEmail = await prisma.user.findUnique({where: {email: email}})
        if(existingUserByEmail){
            return NextResponse.json({message: 'User with that email already exists'}, {status: 409})
        }
    
        const existingUserByUsername = await prisma.user.findUnique({where: {username: username}})
        if(existingUserByUsername){
            return NextResponse.json({message: 'User with that username already exists'}, {status: 409})
        }
    
        const securePassword = await hash(password, 10)
        const newUser = await prisma.user.create({data: {
            email: email,
            username: username,
            password: securePassword,
            status: 'NORMAL',
        }})
    
        return NextResponse.json({message: 'User created succesfully'}, {status: 201})
    }
    catch (error){
        return NextResponse.json({message: 'Something went wrong'}, {status: 500})
    }
    
}