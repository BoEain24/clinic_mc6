import React from 'react'

const BlogCard = () => {
  return (
    <div className='col-span-4 rounded-lg overflow-hidden'>
        <img src="src/assets/images/face2.png" className='h-[180px] object-cover w-full ' alt=""/>
        <div className='p-5 h-[310px] bg-zinc-100'>
            <span className='mb-6'>May 13,2023</span>
            <div className='flex flex-col gap-6'>
                <h5 className='text-xl text-[#003B5C] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. L</h5>
                <p className='line-clamp-3 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci, quis consequatur cupiditate suscipit numquam consectetur blanditiis dolores vel et eveni</p>
                <div>
                    <span className='text-lg'> Keep Reading</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard