import React, { useEffect, useState } from 'react'

const BlogDetail = ({FAQ}) => {
    const [faq, setFaq] = useState([])
    const handleToggle = (id) => {
        setFaq(faq.map((el) => el.id === id ? { ...el, isOpen: !el.isOpen } : el))
    }
    useEffect(() => {
        setFaq(FAQ)
    },[FAQ])
    return (

        <div className='py-16'>
            <h3 className='text-2xl font-medium font-serif text-center text-heading mb-8'>Frequently Asked Questions</h3>
            <div className='flex  justify-center'>

                <div className='flex flex-col gap-6 w-[674px]'>

                    {faq?.map((el) =>
                        <div key={el.id} onClick={() => handleToggle(el.id)} className='border-b border-b-zinc-200 py-4'>
                            <div className='flex justify-between items-center mb-2 duration-200 transition-all'><h3 className='font-medium text-xl text-zinc-800'>{el.question} </h3>{el.isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                            </div>
                            {el.isOpen && <p className='text-zinc-800 font-base'>{el.answer}</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default BlogDetail