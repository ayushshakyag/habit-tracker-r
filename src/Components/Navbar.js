import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import g from '../assets/g.jpg';
import AddHabit from './AddHabit.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "Week View", link: "/habits/week" }
  ];
  let [showHomeView, setShowHomeView] = useState(true); // Initially show the Detail view
  let [open, setOpen] = useState(false);
  const curr_date = new Date().toDateString();
  let [showAddhabit, setShowAddHabit] = useState(false);

  // Helper function to handle the toggle button click and redirect
  const handleToggleClick = () => {
    setShowHomeView(!showHomeView);
    setOpen(false); // Close the menu after clicking the toggle button
  };

  return (
    <div className='shadow-md w-full sticky top-0 left-0'>
      <div className='md:flex items-center justify-between bg-gray-800 md:px-7 px-5'>
        <div className='font-bold text-2xl flex items-center gap-3'>
          <img src={g} alt='logo' className='w-20 h-15 text-blue-600' />
          <span className='text-gray-300'>Track Your Habits</span>
          {/* Menu icon */}
          <div onClick={() => setOpen(!open)} className='cursor-pointer md:hidden w-7 h-7'>
            {
              open ? <HiXMark /> : <HiMenu />
            }
          </div>
        </div>

        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full 
        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'}`}>
          {/* Toggle between Home and Week View */}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <Link to={showHomeView ? "/" : "/habits/week"}>
              <button onClick={handleToggleClick} className='text-gray-300 hover:text-blue-400 duration-500'>
                {showHomeView ? 'Detail View' : 'Week View'}
              </button>
            </Link>
          </li>

          {/* add button */}
          <li>
            <button onClick={() => { setShowAddHabit(true); setOpen(false) }}
              className='btn bg-gray-800 text-gray-300 md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
              Add Habit
            </button>
          </li>
          {/* today's date */}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <span className='text-gray-300 hover:text-blue-400 duration-500'>{curr_date}</span>
          </li>
        </ul>
      </div>
      {/* show Add habit */}
      <AddHabit show={showAddhabit} onClose={() => setShowAddHabit(false)} />
    </div>
  );
};

export default Navbar;
