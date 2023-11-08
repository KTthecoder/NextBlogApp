import { Metadata } from 'next'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import DashboardUser from '@/components/DashboardUser'
import ArticleBlock from '@/components/ArticleBlock'
import BtnAction from '@/components/BtnAction'
import prisma from '@/lib/db'

export const metadata: Metadata = {
    title: "Admin | NextBlog",
    description: "Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam."
}

const page = async () => {
    const session = await getServerSession(authOptions)
    const articles = await prisma.article.findMany({where: {
        userId: session?.user.id
    }, select: {
        title: true,
        Comment: {
            select: {
                _count: true
            }
        },
        likes: true,
        slug: true,
        shortDesc: true,
        category: {
            select: {
                color: true,
                name: true,
            }
        },
        createdAt: true,
        user: {
            select: {
                username: true,
                image: true,
            }
        }
    }, orderBy: {createdAt: "desc"}})

    if(session?.user){
        return (
            <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-6">
                <div className="flex flex-col w-11/12" style={{maxWidth: 1600}}>
                    <h1 className="text-white tracking-wider font-medium text-4xl my-7">Dashboard</h1>
                    <div className="flex flex-row">
                        <DashboardUser email={session.user.email?.toString()} username={session.user.username} id={session.user.id}/>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10 sm:justify-between">
                        <h1 className="text-white tracking-wider font-medium text-3xl">Your articles</h1>
                        <div className="mt-2 sm:mt-0">
                            <BtnAction title="Create Article"/>
                        </div>
                    </div>
                    
                    <div className="mt-10 grid grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-14" style={{maxWidth: 1600}}>
                        {articles.map((item, key) => (
                            <ArticleBlock key={key} title={item.title} commentsCount={item.Comment.length} likesCount={item.likes} slug={item.slug} type="admin"
                            shortDesc={item.shortDesc} category={item.category.name} categoryColor={item.category.color} createdAt={item.createdAt} 
                            user={{name: item.user.username, image: ""}}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-12">
            <h1>You do not have access to this page</h1>
        </div>
    )
}

export default page