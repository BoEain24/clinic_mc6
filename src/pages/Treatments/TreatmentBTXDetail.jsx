import React from 'react'

const TreatmentBTXDetail = () => {
    return (
        <div className='px-32 py-16'>

            <div>
                <h3 className='text-heading font-heading text-center text-3xl font-medium'>BTX Wrinkles Treatment</h3>
                <p className='text-base text-zinc-800 text-center font-satoshi'>Botulinum toxin injection, often referred to as “Botox,” is a minimally invasive cosmetic treatment used to reduce the appearance of fine lines and wrinkles by temporarily relaxing targeted facial muscles.</p>
            </div>
            <div className='flex justify-center items-center py-14'>
                <img src="../../src/Assets/treatment/5.jpg" className='rounded-lg' alt="" />
            </div>
            <div className='flex flex-col gap-14'>
                <div>
                    <h4 className='font-heading text-heading text-2xl mb-4'>What is BTX(wrinkles)?</h4>
                    <p className='font-satoshi'>Botulinum toxin (BTX), commonly known by brand names like Botox, is a neurotoxic protein used in aesthetic medicine to reduce the appearance of facial wrinkles. When injected in small, controlled amounts, BTX temporarily relaxes specific muscles by blocking nerve signals. This relaxation prevents the muscles from contracting, which in turn smooths out fine lines and wrinkles in areas like the forehead, around the eyes (crow’s feet), and between the eyebrows (frown lines). The effects of BTX are temporary, typically lasting three to six months, after which repeat treatments are needed to maintain results. BTX is a popular, minimally invasive option for those seeking a more youthful appearance without surgery.</p>
                </div>
                <div>
                    <h4 className='font-heading text-heading text-2xl mb-4'>Common commercial preparations of Botulinum toxin include:</h4>
                    <ul className='list-disc space-y-2 ps-5 font-satoshi text-base'>
                        <li>Onabotulinumtoxin A (Botox)</li>
                        <li>Abobotulinumtoxin A (Dysport)</li>
                        <li>Incobotulinumtoxin A (Xeomin)</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-heading text-heading text-2xl mb-4'>How does BTX(wrinkles) work?</h4>
                    <p className='font-satoshi text-base'>BTX (Botulinum toxin) works by temporarily blocking nerve signals to targeted muscles, preventing them from contracting. This muscle relaxation smooths out wrinkles and fine lines, especially in areas like the forehead, crow’s feet, and frown lines, creating a smoother, more youthful appearance.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h4 className='font-heading text-heading text-2xl mb-4'>Benefits of BTX (Wrinkles)</h4>
                        <ul className='list-disc space-y-2 ps-5 font-satoshi text-base'>
                            <li>Avoids wrinkles and dynamic lines.</li>
                            <li>Gives the illusion of being renewed and fresh.</li>
                            <li>Minimise the visibility of large jaw muscles.</li>
                            <li>After just one session, noticeable benefits with no side effects or recovery time.</li>
                            <li>Quick, secure, and efficient process</li>
                        </ul>
                    </div>
                    <img src="../../src/Assets/treatment/16.jpg" className='w-[416px] object-cover rounded-lg' alt="" />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h4 className='font-heading text-heading text-2xl mb-4'>What can BTX(Wrinkles) treat?</h4>
                        <p className='mb-2 font-satoshi'>Here are some areas it can help:</p>
                        <ul className='list-disc flex flex-col space-y-2 ps-5'>
                            <li className='font-satoshiMedium '>Forehead Lines: <span className=' font-satoshi'>Reduces the horizontal lines that form across the forehead.</span>
                            </li>
                            <li className='font-satoshiMedium'>Glabellar Lines: <span className=' font-satoshi'>These are the “11” lines between the eyebrows, also known as frown lines.</span>
                            </li>
                            <li className='font-satoshiMedium'>
                                Bunny Lines: <span className='font-satoshi'>Reduces wrinkles on the bridge of the nose.</span>
                            </li>
                            <li className='font-satoshiMedium'>
                                Chin Dimples: <span className='font-satoshi'>Smooths out “orange peel” texture on the chin.</span>
                            </li>
                            <li className='font-satoshiMedium'>Jawline Slimming: <span className='font-satoshi'>By relaxing the masseter muscle, Botox can create a slimmer jawline appearance.</span></li>
                        </ul>
                    </div>
                    <img src="../../src/Assets/treatment/8.jpg" className='w-[415px] h-[280px]  object-cover rounded-lg' alt="" />
                </div>
            </div>
        </div>
    )
}

export default TreatmentBTXDetail