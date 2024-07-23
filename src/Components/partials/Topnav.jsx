import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  const [search, setSearch] = useState("");


  return (
    <div className='w-[100%]'>
        <div className='h-20 relative flex items-center justify-center gap-5'>
            <i className='ri-search-line text-zinc-500 text-zinc-100 text-2xl '></i>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className='w-[80%] p-4 rounded-3xl bg-transparent border-b outline-none text-zinc-200' placeholder='Search Here...' type="text" />
            <button className='w-6' onClick={() => setSearch("")}><i className={search.length > 0 && 'ri-close-fill text-zinc-500 text-2xl'}></i></button>
            <div className='absolute bg-zinc-700 rounded-xl w-[80%] top-[90%] max-h-[40vh] overflow-auto'>
                {/* <Link className='flex p-5 hover:bg-[#6556CD] duration-500'>
                    <img src="" alt="" />
                    <h3 className='text-zinc-200 font-semibold'>Option content</h3>
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Topnav