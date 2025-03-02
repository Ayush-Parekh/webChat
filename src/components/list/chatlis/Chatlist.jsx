import React, { useState } from 'react'
import Adduser from './adduser/Adduser'
function Chatlist() {
    const[addMode,setAddMode]=useState(false)
    return (
        <div className='flex-1 overflow-y-scroll'>
            <div className='flex items-center gap-2 p-5'>
                <div className='flex-1 bg-purple-200/50 items-center flex gap-5 rounded-2xl p-[10px]'>
                    <img className='w-[20px] h-[20px]' src="./search.png" alt="" />
                    <input className='bg-transparent border-none outline-none text-white' type="text" placeholder='Search' />
                </div>
                <img className='w-[40px] h-[40px]  bg-purple-200/50 p-[10px] rounded-2xl cursor-pointer' src={addMode?"./minus.png":"./plus.png"} alt="" 
                onClick={()=>setAddMode((prev)=>!prev)}/>
            </div>

            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >

            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >

            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >

            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >

            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border-b border-purple-200/70 mx-2'>
                <img className='border-[1px] border-purple-200/50 w-[13%] h-[13%] rounded-full object-cover' src="./avatar.png" alt="" />
                <div className=''>
                    <span className='text-sm text-purple-200/90 font-semibold'>Sujal Parekh</span>
                    <p className='text-xs text-purple-200/90 font-extralight'>Hey There</p>
                </div>
            </div >
            {addMode && <Adduser/>}
        </div>
    )
}

export default Chatlist
