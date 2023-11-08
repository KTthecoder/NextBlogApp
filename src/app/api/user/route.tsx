import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { compare, hash } from 'bcrypt'
import { getServerSession } from "next-auth";

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

export async function PUT(req:Request){
    try{
        const body = await req.json()
        const { username, oldPassword, newPassword } = body
    
        const existingUserByUsername = await prisma.user.findUnique({where: {username: username}})
        
        if(!existingUserByUsername){
            return NextResponse.json({message: 'User with that username does not exists'}, {status: 409})
        }

        const passwordMatch = await compare(oldPassword, existingUserByUsername.password)
        if(!passwordMatch){
            return NextResponse.json({message: 'Passwords do not match'}, {status: 409})
        }

        const securePassword = await hash(newPassword, 10)
        await prisma.user.update({where: {
            username: username
        }, data: {
            username: username,
            password: securePassword,
        }})
    
        return NextResponse.json({message: 'User data changed successfully'}, {status: 200})
    }
    catch (error){
        return NextResponse.json({message: 'Something went wrong'}, {status: 500})
    }
}