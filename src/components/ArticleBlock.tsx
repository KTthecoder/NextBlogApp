import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComments } from 'react-icons/fa'
import userImg from '../static/user.jpg'

type Props = {
    title: String,
    commentsCount: Number,
    likesCount: Number,
    banner: String,
    shortDesc: String,
    category: String,
    categoryColor: String,
    createdAt: Date,
    user: {
        name: String,
        image: String,
    }
}

const ArticleBlock = ({ title, commentsCount, likesCount, banner, shortDesc, categoryColor, category, createdAt, user }: Props) => {
  return (
    <div className='flex flex-col w-full'>
        <img src={userImg.src} alt='user' className='w-full h-[300px] bg-red-300 rounded-md shadow-sm shadow-gray-800'/>
        <div className='flex flex-row justify-between items-center mt-4 flex-wrap'>
            <p style={{backgroundColor: categoryColor.toString()}} className='text-white rounded-lg px-2 py-1'>{category}</p>
            <div className='flex flex-row justify-start'>
                <p className='text-white text-base flex flex-row mr-4'><AiOutlineLike className="text-gray-300 text-2xl mr-2"/> {likesCount.toString()}</p>
                <p className='text-white text-base flex flex-row'><FaRegComments className="text-gray-300 text-2xl mr-2"/> {commentsCount.toString()}</p>
            </div>
        </div>
        <h2 className='text-white text-2xl font-medium tracking-wide mt-3'>{title}</h2>
        <p className='text-gray-300 font-medium tracking-wide mt-3'>{shortDesc}</p>
        <div className='flex flex-row items-center mt-3'>
            <img src={userImg.src} alt='user' className='w-10 h-10 rounded-full justify-center'/>
            <div className='flex flex-col ml-3 justify-center'>
                <p className='text-white tracking-wide'>{user.name}</p>
                <p className='text-gray-300 tracking-wide text-sm'>NextBlog | Admin</p>
            </div>
        </div>
        
    </div>
  )
}

export default ArticleBlock