import React from 'react'

const Navbar =() => {
  return (
    <>
        <nav className='flex justify-between bg-slate-700 text-white py-3'>
            <div className="logo">
                <span className='font-bold text-xl mx-9 cursor-pointer'>
                    TSTA
                </span>
            </div>
            <ul className="flex gap-7 mx-auto">
                <li className='cursor-pointer text-xl hover:font-bold transition-all hover:bg-green-700 p-2 rounded' >Home</li>
                <li className='cursor-pointer text-xl hover:font-bold transition-all hover:bg-green-700 p-2 rounded' >Your Tasks</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
