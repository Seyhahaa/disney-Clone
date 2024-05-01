import React, { useState } from 'react'
import logo from '../assets/images/disney.png'
import { HiDotsVertical, HiHome, HiPlus, HiStar } from 'react-icons/hi';
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from 'react-icons/hi2';
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle,setToggle] = useState(false);
    const menu = [
        { name: "Home", icon:HiHome},
        { name: "SEARCH", icon:HiMagnifyingGlass},
        { name: "WATCH LIST ", icon:HiPlus},
        { name: "ORIGINAL", icon:HiStar},
        { name: "MOVIES", icon:HiPlayCircle},
        { name: "SERIES", icon:HiTv}
      ];
  return (
    <div className='flex items-center justify-between container mx-auto'>
        <div className='flex gap-8 items-center'>
        <img src={logo} alt="" className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {
            menu.map((item) => (
                <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
            ))
        }
        </div>
        <div className='flex md:hidden gap-8'>
        {
            menu.map((item,index) => index<3&& (
                <HeaderItem key={item.id} name={''} Icon={item.icon}/>
            ))
        }
        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name='' Icon={HiDotsVertical} />
            {toggle? 
            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4'>
            {
            menu.map((item,index) => index>2&& (
                <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
            ))
        }
            </div> : null }
        </div>
        </div>
        </div>
        <img src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp" alt=""
        className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header