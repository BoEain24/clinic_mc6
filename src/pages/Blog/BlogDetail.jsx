import React, { useState } from 'react'

const BlogDetail = () => {
    const [faq, setFaq] = useState([
        {
            id: 1,
            question: 'What is non-surgical body contouring?',
            answer: 'It’s a set of treatments that reduce fat and shape the body without surgery, using methods like cryolipolysis (fat freezing) and radiofrequency.',
            isOpen: false
        },
        {
            id: 2,
            question: 'How long is the recovery?',
            answer: 'There’s typically no downtime, allowing you to resume regular activities immediately.',
            isOpen: false
        },
        {
            id: 3,
            question: 'How many sessions do I need?',
            answer: 'The number of sessions depends on the treatment type and individual goals. Generally, a series of 3–6 treatments spaced a few weeks apart is recommended for optimal results.',
            isOpen: false
        },
        {
            id: 4,
            question: 'Does it help with skin tightening?',
            answer: 'Some treatments, like radiofrequency, also stimulate collagen to firm and tighten the skin.',
            isOpen: false
        }
    ])
    const handleToggle = (id) => {
        setFaq(faq.map((el) => el.id === id ? { ...el, isOpen: !el.isOpen } : el))
    }
    return (

        <div className='py-14'>
            <h3 className='text-2xl font-medium font-serif text-center'>Frequently Asked Questions</h3>
            <div className='flex  justify-center'>

                <div className='flex flex-col gap-6 w-[674px]'>

                    {faq.map((el) =>
                        <div key={el.id} onClick={() => handleToggle(el.id)} className='border-b border-b-zinc-200 py-2'>
                            <div className='flex justify-between items-center mb-2 duration-200 transition-all'><h3 className='font-medium text-xl'>{el.question} </h3>{el.isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                            </div>
                            {el.isOpen && <p>{el.answer}</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default BlogDetail