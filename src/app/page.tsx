import ArticleBlock from "@/components/ArticleBlock";
import prisma from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: 'Home | NextBlog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque.',
  }
}

export default async function Home() {
  const articles = await prisma.article.findMany({select: {
    title: true,
    Comment: true,
    likes: true,
    banner: true,
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
  }})

  return (
    <div className="flex flex-col justify-center mt-10 sm:mt-16 items-center w-full">
      <h1 className="text-white tracking-wider font-medium text-4xl mb-10 w-11/12" style={{maxWidth: 1600}}>List of all articles</h1>
      <div className="grid grid-flow-row grid-cols-1 w-11/12 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-14" style={{maxWidth: 1600}}>
        {articles.map((item) => (
          <ArticleBlock title={item.title} commentsCount={11} likesCount={item.likes} banner={'red'} slug={item.slug} type='normal'
          shortDesc={item.shortDesc}
          category={item.category.name} categoryColor={item.category.name} createdAt={item.createdAt} user={{name: item.user.username, image: ''}}/>
        ))}
       
        {/* <ArticleBlock title='Second blog post' commentsCount={10} likesCount={14} banner={'red'} slug={'/second-blog-post'} type='normal'
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
        <ArticleBlock title='Third blog post' commentsCount={2} likesCount={5} banner={'red'} slug={'/third-blog-post'} type='normal'
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
        <ArticleBlock title='Fourth blog post' commentsCount={11} likesCount={21} banner={'red'} slug={'/fourth-blog-post'} type='normal'
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
        <ArticleBlock title='Fourth blog post' commentsCount={11} likesCount={21} banner={'red'} slug={'/fourth-blog-post'} type='normal'
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/> */}
      
      </div>
    </div>
    
  )
}
