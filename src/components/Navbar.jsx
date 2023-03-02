import React, {useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'



const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#121313]'>
       
        {/* <h1 className=' text-3xl font-bold  text-[#00df9a] '>NIKE.</h1> */}
        <img src='/Vector@2x.png' className='h-5  md:h-5 mr-3 '></img>
        
        <ul className='{click ? "nav-menu active" : "nav-menu"} hidden md:flex'>
            <li className='p-4 cursor-pointer hover:opacity-60'><Link to='hero' smooth={true} offset={50} duration={500}>HOME</Link></li>
            <li className='p-4 cursor-pointer hover:opacity-60'><Link to='analytics' smooth={true} offset={50} duration={500}>SHOP</Link></li>
            <li className='p-4 cursor-pointer hover:opacity-60'><Link to='footer' smooth={true} offset={50} duration={500}>ABOUT</Link></li>
            <li className='p-4 cursor-pointer hover:opacity-60'><Link to='contact' smooth={true} offset={50} duration={500}>CONTACT</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] bg-opacity-60  ease-in-out duration-700 md:hidden' : 'fixed  collapse  '}>
            
            <ul className='p-4 mt-40 '>
                <li className='p-4 border-b border-gray-600 cursor-pointer hover:opacity-60'>HOME</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer hover:opacity-60'>SHOP</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer hover:opacity-60'>ABOUT</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer hover:opacity-60'>CONTACT</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar