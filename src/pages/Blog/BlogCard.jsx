import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({blog:{id,image,date,title,description}}) => {
  const nav = useNavigate()
  return (
    <div className='col-span-4 rounded-lg border border-zinc-200 overflow-hidden'>
        <img src={image} className='h-[180px] object-cover w-full ' alt=""/>
        <div className='p-5 h-[310px] flex flex-col gap-y-6 bg-zinc-100 hover:bg-zinc-300 duration-200 transition-all'>
            <div className='flex flex-col gap-y-5'>
            <span className=' text-base text-zinc-600'>{date}</span>
              <div className='flex flex-col gap-y-3.5'>

              <h5 className='text-xl text-heading font-medium font-sans'>{title}</h5>
                <p className='line-clamp-3 text-base text-zinc-600 '>{description} </p>
              </div>
            </div>

            <div onClick={() => nav(`/blog/detail/${id}`) } className='py-2 ' >
                    <span className='text-base text-secondary inline-flex items-center gap-2'> Keep Reading <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 fill-secondary">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span>
                    </div>
        </div>
    </div>
  )
}

export default BlogCard