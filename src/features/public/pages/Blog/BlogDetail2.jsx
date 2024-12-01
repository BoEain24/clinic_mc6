import React from 'react'
import BlogDetail from './BlogDetail'

const BlogDetail2 = () => {
  return (
    <div className='px-32'>
        {/* title image and services section */}
        <div className='py-16 flex flex-col gap-14'>
            {/* detail title */}
            <div className='text-center flex flex-col gap-4'>
                <span className='mb-2'>May 13, 2023</span>
                <h3 className='text-3xl font-serif font-medium'>The Benefits of Non-Surgical Body Contouring</h3>
                <p>Non-surgical body contouring offers a convenient and effective way to enhance body shape and address stubborn fat areas without surgery. Here’s an overview of its key benefits:</p>
            </div>
            {/* image */}
            <div className='w-full flex justify-center'>
                <img className='rounded-lg h-[440px]' src="src/Assets/Blog/blog-detail.jpg" alt="" />
            </div>

            {/* titles and descriptions */}
            <div className='flex flex-col gap-10'>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>No Surgery, No Downtime</h4>
                    <p>Non-surgical body contouring procedures like CoolSculpting, radiofrequency treatments, and ultrasound technology eliminate or reduce fat without any incisions. As a result, there’s little to no downtime, allowing clients to return to daily activities almost immediately.</p>
                </div>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>Minimally Invasive with Low Risk</h4>
                    <p>Since these procedures don’t involve surgery, there’s a lower risk of complications. Non-invasive methods are gentler on the body, minimizing risks like infection or scarring, making them ideal for clients seeking safe, low-impact solutions.</p>
                </div>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>Gradual, Natural-Looking Results</h4>
                    <p>Non-surgical treatments often show results gradually over weeks as the body naturally processes and eliminates fat cells. This gives clients a more subtle transformation that appears natural and gradual, making it less noticeable to others that they’ve undergone a procedure.</p>
                </div>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>Quick and Convenient</h4>
                    <p>Most non-surgical body contouring sessions take about 30–60 minutes, fitting easily into busy schedules. Many clients can even book appointments over lunch breaks, making it a flexible choice for those with active lifestyles.</p>
                </div>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>Targeted Fat Reduction</h4>
                    <p>Non-surgical body contouring treatments allow precise targeting of problem areas like the abdomen, thighs, arms, and love handles. This precision enables customized results, helping clients achieve their specific body goals without affecting other areas.</p>
                </div>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>Little to No Discomfort</h4>
                    <p>These treatments are designed to be as comfortable as possible, with minimal discomfort during and after the session. Some procedures, like CoolSculpting, may cause a cooling sensation, while others, like radiofrequency, may feel warm, but all are typically well tolerated.</p>
                </div>
                <div>
                    <h4 className='text-2xl font-serif mb-4 font-medium'>Boosted Confidence and Motivation</h4>
                    <p>The confidence that comes from achieving one’s body goals can be a major benefit. Many clients feel more motivated to maintain a healthy lifestyle following treatment, as they’re inspired to sustain and enhance their results.</p>
                </div>
            </div>
        </div>
        {/* faq Section */}
        <BlogDetail/>
    </div>
  )
}

export default BlogDetail2