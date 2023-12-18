import React from 'react';
import './MobileStore.css';
import { useSelector } from 'react-redux';

function TopNavbar() {
    const cartCount = useSelector((item) => item.CartReducer.totalQuantity);
    const totalPrice = useSelector((item) =>item.CartReducer.totalPrice);
    return (
        <>
            <nav style={{borderBottom: '1px solid darkblue', position: 'sticky', top: '0', zIndex: '99'}} className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="bg-indigo-500 py-2 text-white text-xl">Welcome to Syed's Online Mobile Store !</div>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
                    <a href="#" className="my_logo flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="../images/My_photo.jpg" className="h-8 pt-1" alt="Flowbite Logo" />
                        <span style={{fontFamily: 'cursive'}} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Syed Hazrath</span>
                    </a>
                    <div className="search_bar flex md:order-2">
                    <div className="relative md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    </div>
                    <ul className="top_navigation flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li> <a style={{background: 'green', color:'white', padding: '4px 8px'}} href="https://syed-hazarath-portfolio.netlify.app/#/home" target="_blank" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">About Me</a></li>
                        <li> <button style={{background: 'darkblue', color:'white', padding: '4px 8px'}} className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Cart Items: {cartCount}</button></li>
                        <li><button style={{background: 'darkblue', color:'white', padding: '4px 8px'}} className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Total Cart Value: {totalPrice}</button></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default TopNavbar