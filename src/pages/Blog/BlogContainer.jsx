import React from 'react'
import BlogCard from './BlogCard'

const BlogCotntainer = () => {
  return (
    <section className='px-32'>
        <div className='py-16'>
            <div className='grid grid-cols-12 gap-y-8 gap-x-5'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    </section>
  )
}

export default BlogCotntainer