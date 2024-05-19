import React from 'react'
import { RiH1 } from 'react-icons/ri'
import { readTime } from '../../utils/helpers'
import moment from 'moment'

const PostsCard = () => {
  return (
    <section >
        <div className='flex flex-col sm:flex-row gap-4 cursor-pointer'>
        <div className='flex-[2.5]'>
            <p className='pb-2 font-semibold capitalize'>UserName</p>
            <h2 className='text-xl font-bold line-clamp-2 leading-6 capitalize'>Title</h2>
            <div className='py-1 text-gray-500 line-clamp-2 left-5'dangerouslySetInnerHTML={{__html : 'desc'}}/>
        </div>
        <div className='flex-[1]'>
          <img className='w-[53rem]'
           src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716076800&semt=sph" alt="" />
        </div>
        </div>
        <div className='flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0'>
          <p className='text-xs text-gray-600'>{readTime({__html:'desc'})} min red . {moment('craeted').format('MMM DD')}</p>
        </div>
    </section>
  )
}

export default PostsCard