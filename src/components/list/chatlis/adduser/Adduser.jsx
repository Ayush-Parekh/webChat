import React from 'react'

function Adduser() {
    return (
        <div className='p-2 bg-sky-500/50 rounded absolute inset-0 w-fit h-fit m-auto'>
            <form className='flex gap-2'>
                <input className='p-2 border-none outline-none rounded bg-amber-50' type="text" placeholder='UserName' name='UserName' />
                <button className='p-2 bg-blue-500/80 border-none outline-none rounded text-white'>Search</button>
            </form>
            <div className='mt-3 flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-full object-cover' src="./avatar.png" alt="" />
                    <span>Ayush Parekh</span>
                </div>
                <button className='bg-green-500/80 text-green-950 p-1 rounded border-none outline-none'>Add User</button>
            </div>
        </div>
    )
}

export default Adduser