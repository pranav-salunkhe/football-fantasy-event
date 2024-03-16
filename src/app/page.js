import React from 'react'
import homeMbappe from '../assets/homoMbappe.png';
import istenitklogo from '../assets/istenitk.png';
import Image from 'next/image';
export default function Home() {
  return (
    <div className=' flex flex-col justify-start items-center h-screen w-screen'>
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
  )
}

