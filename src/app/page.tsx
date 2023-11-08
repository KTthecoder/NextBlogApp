import ArticleBlock from "@/components/ArticleBlock";
import prisma from "@/lib/db";

export async function generateMetadata() {
  return {
    title: 'Home | NextBlog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque.',
  }
}

export default async function Home() {

  const articles = await prisma.article.findMany({select: {
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
    },
  }, orderBy: {createdAt: "desc"}})

  return (
    <div className="flex flex-col justify-center mt-10 sm:mt-16 items-center w-full">
      <h1 className="text-white tracking-wider font-medium text-4xl mb-10 w-11/12" style={{maxWidth: 1600}}>List of all articles</h1>
      <div className="grid grid-flow-row grid-cols-1 w-11/12 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-14" style={{maxWidth: 1600}}>
        {articles.map((item, key) => (
          <ArticleBlock key={key} title={item.title} commentsCount={item.Comment.length} likesCount={item.likes} slug={item.slug} type='normal'
          shortDesc={item.shortDesc} category={item.category.name} categoryColor={item.category.color} createdAt={item.createdAt} 
          user={{name: item.user.username, image: ''}}/>
        ))}   
      </div>
    </div>
    
  )
}
