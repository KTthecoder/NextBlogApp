import ArticleBlock from "@/components/ArticleBlock";
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: 'Home | NextBlog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque.',
  }
}

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center mt-10 sm:mt-16 items-center w-full">
      <div className="grid grid-flow-row grid-cols-1 w-11/12 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-14" style={{maxWidth: 1600}}>
        <ArticleBlock title='First blog post' commentsCount={11} likesCount={21} banner={'red'} 
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
        <ArticleBlock title='Second blog post' commentsCount={10} likesCount={14} banner={'red'} 
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
        <ArticleBlock title='Third blog post' commentsCount={2} likesCount={5} banner={'red'} 
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
        <ArticleBlock title='Fourth blog post' commentsCount={11} likesCount={21} banner={'red'} 
        shortDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua...' 
        category='Quick News' categoryColor={'red'} createdAt={new Date()} user={{name: 'Ksawery', image: ''}}/>
      </div>
    </div>
    
  )
}
