import React, { useState } from 'react'
import BlogCard from './BlogCard'
import useBlogStore from '../../store/useBlogStore'

const BlogContainer = () => {
  const {blogs} = useBlogStore();
  return (
    <section className='px-32'>
      <div className='py-16'>
        <div className='grid grid-cols-12 gap-y-8 gap-x-5'>
          {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}

        </div>
      </div>
    </section>
  )
}

export default BlogContainer