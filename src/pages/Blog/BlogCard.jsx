import React from 'react'

const BlogCard = ({blog:{id,image,date,title,description}}) => {
  return (
    <div className='col-span-4 rounded-lg border border-zinc-200 overflow-hidden'>
        <img src={image} className='h-[180px] object-cover w-full ' alt=""/>
        <div className='p-5 h-[310px] bg-zinc-100 hover:bg-zinc-200 duration-200 transition-colors'>
            <span className='mb-6'>{date}</span>
            <div className='flex flex-col gap-6'>
                <h5 className='text-xl text-[#003B5C] font-medium'>{title}</h5>
                <p className='line-clamp-3 text-lg'>{description} </p><div>
                    <span className='text-lg'> Keep Reading</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard