import React, { useEffect, useState } from 'react'
import BlogDetail from './BlogDetail'
import useBlogStore from '../../store/useBlogStore'
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetail2 = () => {
    const { blogs } = useBlogStore();
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);
    const nav = useNavigate()

    useEffect(() => {
        if (blogs) {
            const finder = blogs.find((el) => el.id == id);
            setBlogData(finder)
            console.log(finder.detail.img)
        }

    }, [blogs, id])
    const handleback = () => {
        nav(-1)
    }
    return (
        <div className='relative px-32'>
            {/* title image and services section */}
            <div className='py-16 flex flex-col gap-14'>
                {/* detail title */}
                <div className='text-center flex flex-col gap-4'>
                    <div>
                        <span className='mb-2 text-base text-zinc-600'>{blogData?.date}</span>
                        <h3 className='text-3xl text-heading font-serif font-medium'>{blogData?.title}</h3>
                    </div>
                    <p className='text-center text-base text-zinc-800'>{blogData?.detail?.description}</p>
                </div>
                {/* image */}
                <div className='w-full flex justify-center'>
                    <img className='rounded-lg h-[440px]' src={blogData?.detail?.img} alt="" />
                </div>

                {/* titles and descriptions */}
                <div className='flex flex-col gap-10'>
                    {blogData?.detail?.services?.map(({ id, title, description, texts, abouts, contents }) => (
                        <div key={id}>
                            <h4 className='text-2xl font-serif text-heading mb-4 font-medium'>{title}</h4>

                            {description && <p>{description}</p>}
                            {texts && <ul className='space-y-2 my-2 list-disc ms-5'>
                                {texts.map((text, index) => <li key={index}>{text}</li>)}
                            </ul>}
                            {abouts && <ul className='space-y-2 list-disc ms-5'>
                                {abouts.map(({ id, about, aboutText }) => <li key={id} className='text-base text-zinc-800'><span className='font-medium'>{about}</span>{' '} <span>{aboutText}</span></li>)}</ul>}
                            {contents && <div className='space-y-4'>
                                {contents.map(({ id, content, abouts }) => <div key={id} >
                                    <h4 className='mb-2'>{content}</h4>
                                    <ul className='ms-5 list-disc space-y-2'>
                                        {abouts.map(({ id, about, aboutText }) => <li key={id} className='text-base text-zinc-800'><span className='font-medium'>{about}</span>{' '} <span>{aboutText}</span></li>)}
                                    </ul>
                                </div>)}</div>}
                        </div>
                    ))}

                </div>
            </div>
            {/* faq Section */}
            <BlogDetail FAQ={blogData?.detail?.faq} />
            <span onClick={handleback} className='absolute top-8 left-32  size-10 bg-zinc-200 hover:bg-zinc-300 duration-200 transition-all rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

            </span>
        </div>
    )
}

export default BlogDetail2