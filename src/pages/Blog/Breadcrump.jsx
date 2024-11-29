import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrump = () => {
  return (
    <section className={`bg-[url('../Assets/hero-&-banner-img/banner.png')] w-full h-[377px] bg-center`} >
        <div className='w-full h-full flex items-center justify-center text-zinc-50'>
            <div className='text-3xl'>
                <h3>Blog</h3>
                <div className='text-sm flex items-center gap-x-1'>
                    <Link to="/" className="mr-2 hover:text-blue-500 duration-200 transition-colors">Home</Link>
                    <span></span>
                    <Link to="/blog" className="hover:text-blue-500 duration-200 transition-colors" >Blog</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrump