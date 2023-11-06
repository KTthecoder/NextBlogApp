import Link from "next/link"
import { AiOutlineLike, AiOutlineCalendar } from 'react-icons/ai'
import { FaRegComments } from 'react-icons/fa'
import userImg from '../../static/user.jpg'

type Props = {
    params: {
        slug: String
    }
}

export async function generateMetadata({params}:Props) {
    const slug = params.slug.replaceAll('-', ' ')
    return {
        title: `${slug[0].toUpperCase() + slug.slice(1)} | NextBlog`,
        description: ``
    }
}

const page = ({params}:Props) => {
    const slug = params.slug.replaceAll('-', ' ')
    
    return (
        <div className="flex w-full flex-col items-center justify-center mt-16 sm:-mt-4 lg:-mt-12">
        <div className="flex flex-col items-center justify-center w-full" style={{maxWidth: 850}}>
            <div className="w-11/12 flex items-center justify-center flex-col border-b-2 border-[#1d1d1d] pb-5 sm:pb-7" >
                <div className="hidden sm:flex mt-7">
                    <Link className="text-gray-200" href='/'>home page</Link>
                    <p className="text-gray-200 px-3">{'>'}</p>
                    <p className="text-gray-200 font-medium">{slug}</p>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl tracking-wider mt-6 sm:mt-4">First Blog Post</h1>
                <p style={{backgroundColor: 'red'}} className='text-white rounded-lg px-2 py-1 text-sm mt-6'>Quick News</p>
            </div>
            <div className="w-11/12 flex items-center justify-between mt-5">
                <div className="flex">
                    <p className='text-white text-base flex flex-row mr-4'><AiOutlineLike className="text-gray-300 text-xl mr-2 sm:text-2xl"/>{22}</p>
                    <p className='text-white text-base flex flex-row'><FaRegComments className="text-gray-300 text-xl mr-2 sm:text-2xl"/>{11}</p>
                </div>
                <div className="flex">
                    <p className='text-gray-200 tracking-wide flex flex-row items-center'>
                    <AiOutlineCalendar className="text-gray-200 text-xl mr-2 sm:text-2xl"/>{'6.11.2023'}</p>
                </div>
            </div>
        </div>
        <div className="w-11/12 mt-7 sm:mt-10" style={{maxWidth: 950}}>
            <img src={userImg.src} alt='cover' className='w-full rounded-md shadow-sm shadow-gray-800'/>
            <div className="flex flex-col w-full">
                <h2 className="font-medium text-white text-xl mt-6 tracking-wide leading-8 sm:text-2xl sm:leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <p className="text-gray-100 tracking-wide mt-7 leading-7 sm:text-lg sm:leading-9">Tincidunt id aliquet risus feugiat in ante metus dictum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Tincidunt eget nullam non nisi est. Elementum pulvinar etiam non quam lacus. Sed turpis tincidunt id aliquet risus feugiat in. Vitae tortor condimentum lacinia quis vel. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Sed egestas egestas fringilla phasellus faucibus.</p>
                <p className="text-gray-100 tracking-wide mt-7 leading-7 sm:text-lg sm:leading-9">Tristique magna sit amet purus. Cursus turpis massa tincidunt dui ut ornare lectus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ut placerat orci nulla pellentesque. A diam maecenas sed enim ut sem viverra aliquet eget. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>
                <p className="text-gray-100 tracking-wide mt-7 leading-7 sm:text-lg sm:leading-9">Non consectetur a erat nam. Vitae justo eget magna fermentum iaculis eu non diam. Id cursus metus aliquam eleifend mi in nulla. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Eget egestas purus viverra accumsan. Erat nam at lectus urna duis convallis convallis tellus id. Et odio pellentesque diam volutpat. Dictum sit amet justo donec enim diam vulputate.</p>
                <h2 className="font-medium text-white text-xl mt-7 tracking-wide leading-8 sm:text-2xl sm:leading-10">Odio ut sem nulla pharetra diam sit amet. Et malesuada fames ac turpis egestas integer.</h2>
                <p className="text-gray-100 tracking-wide mt-7 leading-7 sm:text-lg sm:leading-9">Orci a scelerisque purus semper eget duis. At consectetur lorem donec massa. At risus viverra adipiscing at in tellus integer feugiat. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Elementum pulvinar etiam non quam lacus suspendisse. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Massa id neque aliquam vestibulum morbi. </p>
                <p className="text-gray-100 tracking-wide mt-7 leading-7 sm:text-lg sm:leading-9">Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Maecenas sed enim ut sem. Eu facilisis sed odio morbi quis. Dapibus ultrices in iaculis nunc sed. </p>
            </div>
        </div>
        </div>
    )
}

export default page