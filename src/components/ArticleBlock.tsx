import { AiOutlineLike, AiOutlineCalendar } from 'react-icons/ai'
import { FaRegComments } from 'react-icons/fa'
import userImg from '../static/user.jpg'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'
import { getServerSession } from "next-auth"
import MainButton from './MainButton'
import BtnAction from './BtnAction'

type Props = {
    title: String,
    commentsCount: Number,
    likesCount: Number,
    shortDesc: String,
    category: String,
    categoryColor: String,
    createdAt: Date,
    slug: String,
    type: 'admin' | 'normal'
    user: {
        name: String,
        image: String,
    }
}

const ArticleBlock = async ({ title, commentsCount, likesCount, shortDesc, categoryColor, category, createdAt, slug, type, user }: Props) => {

    return (
        <div  className='flex flex-col w-full'>
            <Link href={`${slug.toString()}`}>
                <img src={userImg.src} alt='user' className='w-full h-[300px] sm:h-[250px] rounded-md shadow-sm shadow-gray-800'/>
                <div className='flex flex-row justify-between items-center mt-4 flex-wrap'>
                    <p style={{backgroundColor: categoryColor.toString()}} className='text-white rounded-lg px-2 py-1 text-sm'>{category}</p>
                    <div className='flex flex-row justify-start'>
                        <p className='text-white text-base flex flex-row mr-4'><AiOutlineLike className="text-gray-300 text-2xl mr-2"/> {likesCount.toString()}</p>
                        <p className='text-white text-base flex flex-row'><FaRegComments className="text-gray-300 text-2xl mr-2"/> {commentsCount.toString()}</p>
                    </div>
                </div>
                <h2 className='text-white text-2xl font-medium tracking-wide mt-3'>{title}</h2>
                <p className='text-gray-300 font-medium tracking-wide mt-3'>{shortDesc}</p>
                {type === 'admin'
                ? null
                : <div className='flex flex-row items-center mt-3 w-full'>
                    <img src={userImg.src} alt='user' className='w-10 h-10 rounded-full justify-center'/>
                    <div className='flex flex-col ml-3 justify-center'>
                        <p className='text-white tracking-wide'>{user.name}</p>
                        <p className='text-gray-300 tracking-wide text-sm'>NextBlog | Admin</p>
                    </div>
                </div>}
                <p className='text-gray-200 tracking-wide mt-5 flex flex-row items-center'>
                <AiOutlineCalendar className="text-gray-200 text-xl mr-2"/>{createdAt.toLocaleDateString()}</p>
            </Link>
            {type === 'admin'
            ? <div className='mt-6 flex items-center justify-start'>
                <MainButton link={'/edit-article'} title='Edit' color='blue'/>
                <span className='mr-5'></span>
                <BtnAction title='Delete'/>
            </div>
            : null}
        </div>
    )
}

export default ArticleBlock