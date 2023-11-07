import { Metadata } from 'next'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import DashboardUser from '@/components/DashboardUser'
import ArticleBlock from '@/components/ArticleBlock'

export const metadata: Metadata = {
    title: 'Admin | NextBlog',
    description: 'Varius morbi enim nunc faucibus a pellentesque. Quis varius quam quisque id diam.'
}

const page = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)

    if(session?.user){
        return (
            <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-6">
                <div className='flex flex-col w-11/12' style={{maxWidth: 1600}}>
                    <h1 className='text-white tracking-wider font-medium text-4xl my-7'>Dashboard</h1>
                    <div className='flex flex-row'>
                        <DashboardUser/>
                        {/* <div className='flex flex-col items-center mt-3 justify-center py-5 sm:flex-row sm:w-[220px] sm:py-6'>
                            <button className='bg-blue-500 rounded-md px-6 py-2 mt-3 tracking-wide text-base box-border sm:mt-0
                            transition-all duration-500 shadow-sm hover:rounded-xl text-white'>Create article</button>
                        </div>
                        <div className='flex flex-col items-center mt-3 justify-center py-5 sm:flex-row sm:w-[220px] sm:py-6'>
                            <button className='bg-red-500 rounded-md px-6 py-2 mt-3 tracking-wide text-base box-border sm:mt-0
                            transition-all duration-500 shadow-sm hover:rounded-xl text-white'>Logout</button>
                        </div> */}
                    </div>
                    <h1 className='text-white tracking-wider font-medium text-3xl mt-10'>Your articles</h1>
                    <div className="mt-10 grid grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-14" style={{maxWidth: 1600}}>
                        <ArticleBlock title='First blog post' commentsCount={11} likesCount={21} banner={'red'} slug={'/first-blog-post'} type='admin'
                        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
                        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
                        <ArticleBlock title='Second blog post' commentsCount={10} likesCount={14} banner={'red'} slug={'/second-blog-post'} type='admin'
                        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
                        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
                        <ArticleBlock title='Third blog post' commentsCount={2} likesCount={5} banner={'red'} slug={'/third-blog-post'} type='admin'
                        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
                        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
                        <ArticleBlock title='Fourth blog post' commentsCount={11} likesCount={21} banner={'red'} slug={'/fourth-blog-post'} type='admin'
                        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
                        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-12">
            <h1>You don't have access to this page</h1>
        </div>
    )
}

export default page