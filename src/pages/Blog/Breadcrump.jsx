import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrump = () => {
  return (
    <section className={`bg-[url('../Assets/hero-&-banner-img/banner.png')] w-full h-[377px] bg-center`} >
        <div className='w-full h-full flex items-center justify-center text-zinc-50'>
            <div>
                <h3 className='text-3xl font-medium font-heading mb-2 text-center'>Blog</h3>
                <div className='text-sm flex items-center gap-x-1'>
                    <Link to="/" className="mr-2 hover:text-blue-500 duration-200 transition-colors font-medium">Home</Link>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</span>
                    <p className='font-medium'>Blog</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrump