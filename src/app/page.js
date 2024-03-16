"use client";
import React from 'react'
import homeMbappe from '../assets/homoMbappe.png';
import istenitklogo from '../assets/istenitk.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>

    <div className='hidden sm:flex border-[1px] border-white rounded-xl shadow-lg shadow-info'>
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <div className='w-36 h-36 flex justify-center items-start bg-error rounded-full absolute top-10 -left-10'>     
    </div>
    <div className='w-16 h-16 flex justify-center items-start bg-accent rounded-full absolute top-4 left-8'>     
    </div>
    {/* <div className="mockup-phone absolute scale-75 rotate-12 top-24 right-80">
            <div className="camera"></div> 
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    
                </div>
            </div>
    </div> */}
    <figure className='bg-primary rounded-l-xl stack'>
    
        <Image
         src={homeMbappe} 
         height={512} 
         width={512} 
        layout='responsive'
         alt="Album"
         className=''
         />
    
    </figure>
    <div className="card-body bg-base-300 rounded-r-xl">
        <h2 className="card-title text-content-text">Get ready for something...!</h2>
        <p className='w-64 h-fit text-justify text-gray-600'>
                    Some lorem ipsum text i am adding <span className='text-white'>anything</span> just to see how it looks. 
                    This event is brought to you by <span className='text-white'>ISTE Credit&#8482;&nbsp;</span>.
                    Give me <span className='text-white'>legit</span> text later to modify this shit.
        </p>
        <div className=' w-full h-full border-t-[1px] border-dashed border-white'>
            <p className='pt-4 text-lg font-bold'>How to play?</p>
            <ul className="steps steps-vertical">
                <li className="step step-accent">Register</li>
                <li className="step step-neutral step-accent">Choose plan</li>
                <li className="step step-neutral">Purchase</li>
                <li className="step step-neutral">Receive Product</li>
            </ul>
        </div>
        <div className="card-actions justify-end">
        <a href='/dashboard' className="btn btn-primary">Dashboard</a>
        </div>
    </div>
    </div>
    </div>
    <div className='sm:hidden flex flex-col justify-start items-center h-screen w-screen'>
        <div className='w-56 h-56 flex justify-center items-end bg-slate-200 rounded-3xl relative top-20'>   
            <Image 
                src={homeMbappe}
                height={224}
                width={224}
                alt='mbappe'
                layout="responsive"
                className='flex justify-center items-center object-fill'
            />    
        </div>
        <div className='w-16 h-16 flex justify-center items-start bg-slate-500 rounded-full relative right-28 bottom-32'>     
        </div>
        <div className='flex flex-col w-full text-gray-600 justify-center font-extrabold text-5xl'>
            <p className='flex justify-start items-center w-full'>Football</p>
            <p className='flex justify-center items-center w-full'>Fantasy 24</p>
        </div>
        <div className='flex flex-col justify-center items-center p-4'>
            <div className='text-lg mt-4'><p>ISTE Credit Presents</p></div>
            <div className=' text-center'>
                <p className=' text-gray-600'>
                    Some lorem ipsum text i am adding <span className='text-white'>anything</span> just to see how it looks. 
                    This event is brought to you by <span className='text-white'>ISTE Credit&#8482;&nbsp;</span>.
                    Give me <span className='text-white'>legit</span> text later to modify this shit.
                </p>
            </div>
        </div>
        {/* <div className='w-32 h-32 flex justify-center items-start bg-purple-900 rounded-full relative -right-40 -bottom-24'>      */}
        {/* <Image 
                src={istenitklogo}
                height={128}
                width={128}
                alt='mbappe'
                layout="responsive"
                className='flex justify-center rounded-full items-center object-fill'
            /> */}
        {/* </div> */}
    </div>
    </div>
  )
}

