import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationPin, FaPhone, FaTwitter, FaX, FaXmark, FaYoutube } from "react-icons/fa6";
import { FaRegUser, FaTwitch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { PiShoppingCart } from "react-icons/pi";
import { IoHeartOutline } from 'react-icons/io5'
import { CiLocationOn } from "react-icons/ci"
import { Link } from 'react-router-dom';
import { Favorits } from './Favorits';
import { Basket } from './Basket';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleElement = (elementId) => {
        var element = document.getElementById(elementId);

        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.classList.add("hidden");
                document.removeEventListener("mousedown", handleOutsideClick);
            }
        }

        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
            // element.classList.add("transition")
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            element.classList.add("hidden");
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }
    return (
        <>
            {/* navbar: category*/}
            <div className={`duration-200 z-10 transition-all h-full w-[30%] bg-white border-r border-gray absolute top-0 left-0 max-xl:w-[50%] max-lg:w-[70%] max-md:w-full  ${isOpen ? "translate-x-[0]" : "-translate-x-full "}`}>
                <div className="w-full">
                    <div className='flex items-center justify-between bg-green p-3'>
                        <Link to='/' className="logo w-44">
                            <img src={Logo} alt="" />
                        </Link>
                        <div onClick={toggle} className="menu p-2">
                            <FaXmark className='text-4xl text-white cursor-pointer' />
                        </div>
                    </div>

                    <div>
                        category
                    </div>
                </div>
            </div>

            <div className="bg-light-green max-sm:bg-green rounded-br-[30px] rounded-bl-[30px] max-sm:rounded-bl-[15px] max-sm:rounded-br-[15px] max-lg:rounded-bl-[20px] max-lg:rounded-br-[20px]" >
                <div className='bg-green'>
                    <div className="container 2xl:px-14 max-sm:px-3">
                        <div className="flex items-center justify-between w-full max-md:w-full max-md:justify-between">
                            <Link to='/' className='hidden max-md:flex'>
                                <img src={Logo} alt="" className='w-36 p-2' />
                            </Link>
                            <div className='flex items-center gap-3 max-md:hidden'>
                                <Link to='#' className='text-white text-base p-2'>Mağazalar</Link>
                                <Link to='#' className='text-white text-base p-2'>Kampaniyalar</Link>
                                <Link to='#' className='text-white text-base p-2'>Sizə özəl</Link>
                                <Link to='#' className='text-white text-base p-2'>Kredit ödənişi</Link>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3 flex items-center gap-3 max-sm:hidden">
                                    <Link to='/' className='p-2 bg-third-green rounded-full text-sm'><FaInstagram className='text-white' /></Link>
                                    <Link to='/' className='p-2 bg-third-green rounded-full text-sm'><FaFacebook className='text-white' /></Link>
                                    <Link to='/' className='p-2 bg-third-green rounded-full text-sm'><FaYoutube className='text-white' /></Link>
                                    <Link to='/' className='p-2 bg-third-green rounded-full text-sm'><FaLinkedin className='text-white' /></Link>
                                    <Link to='/' className='p-2 bg-third-green rounded-full text-sm'><FaPhone className='text-white' /></Link>
                                </div>
                                <div className="relative">
                                    <div className='p-1 cursor-pointer hidden max-sm:flex' onClick={() => toggleElement("div1")}><FaRegUser className='text-white text-2xl' /></div>
                                    <div id='div1' className='z-10 hidden w-[200px] absolute top-24 max-sm:top-11 right-0'>
                                        <div className='flex flex-col bg-white'>
                                            <Link to='/Register' className='p-2 px-4 w-[200px] bg-white'>Qeydiyyat</Link>
                                            <Link to='/Login' className='p-2 px-4 w-[200px]  bg-white'>Giriş</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden max-md:flex'>
                                    <div onClick={toggle} className='text-white rounded-full bg-third-green p-1 ml-8 max-sm:ml-4'><HiMenuAlt2 className='text-xl' /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container 2xl:px-14 max-sm:-mt-2">
                    <div className='flex justify-between items-center'>
                        <Link to='/' className='max-md:hidden'>
                            <img src={Logo} alt="" className='w-44 p-2' />
                        </Link>

                        <div className='flex w-full items-center justify-end gap-4 py-2 max-md:w-full max-md:justify-between'>
                            <form action="" className='relative z-0 w-[280px] max-xl:w-[250px] max-sm:w-full max-sm:mx-3'>
                                <input type="text" autoComplete='off' id='search' placeholder='Eviniz üçün axtarın' className='focus:bg-white focus:text-black focus:placeholder:text-black w-full text-sm placeholder:text-white placeholder:text-sm outline-none p-2 pl-5 rounded-full text-white bg-third-green max-xl:text-[17px] max-xl:p-2 max-xl:px-4' />
                                <label htmlFor='search' className='absolute top-2 cursor-text right-4 rounded-full flex justify-center text-xl text-white items-center'>
                                    <IoSearch />
                                </label>
                            </form>
                            <div className='relative flex items-center gap-4 max-sm:hidden'>

                                <div className='p-1 cursor-pointer' onClick={() => toggleElement("div1")}><FaRegUser className='text-white text-2xl' /></div>
                                <div id='div1' className='hidden w-[200px] absolute top-14 right-0'>
                                    <div className='flex flex-col'>
                                        <Link to='/Register' className='p-2 w-[200px]  bg-white'>Qeydiyyat</Link>
                                        <Link to='/Login' className='p-2 w-[200px]  bg-white'>Giriş</Link>
                                    </div>
                                </div>
                                <div className="p-1 cursor-pointer" onClick={() => toggleElement('div2')}><IoHeartOutline className='text-white text-3xl' /></div>
                                <div onClick={() => toggleElement("div3")} className='cursor-pointer p-1'><PiShoppingCart className='text-white text-3xl' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id='div2' className='hidden h-full w-[500px] max-sm:w-full fixed top-0 right-0 bg-white z-10'>
                <div className='flex flex-col'>
                    <div className="h-20 w-full flex items-center justify-between">
                        <h1 className='text-2xl font-medium font-sans ml-4'>Bəyəndiklərim</h1>
                        <div id='clsBtn' onClick={() => toggleElement('div2')} className="cursor-pointer h-8 w-8 mr-5 rounded text-3xl flex items-center justify-center"><FaXmark className='text-1xl' /></div>
                    </div>
                    <div className='p-5'>
                        <Favorits />
                    </div>
                </div>
            </div>
            <div id='div3' className='hidden h-full w-[500px] fixed top-0 right-0 max-sm:w-full bg-white z-10'>
                <div className="h-20 w-full flex items-center justify-between">
                    <h1 className='text-2xl font-medium font-sans ml-4'>Səbətim</h1>
                    <div id='clsBtn' onClick={() => toggleElement('div3')} className="cursor-pointer h-8 w-8 mr-5 rounded text-3xl flex items-center justify-center"><FaXmark className='text-1xl' /></div>
                </div>
                <div className='p-5'>
                    <Basket />
                </div>
            </div>
            
            <div className="hidden items-center justify-between w-full h-[50px] fixed bottom-0 left-0 max-sm:flex border-t-2">
                <Link to='/' className='flex justify-center items-center w-full h-full text-light-green text-2xl'><CiLocationOn /></Link>
                <Link to='/' className='flex justify-center items-center w-full h-full text-light-green text-2xl'><CiLocationOn /></Link>
                <Link to='/' className='flex justify-center items-center w-full h-full text-light-green text-2xl'><CiLocationOn /></Link>
                <div onClick={() => toggleElement("div3")} className='flex cursor-pointer justify-center items-center w-full h-full text-light-green text-2xl'><PiShoppingCart /></div>
            </div>
        </>
    )
}

export default Header