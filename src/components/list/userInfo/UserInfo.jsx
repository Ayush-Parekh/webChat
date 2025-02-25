import React from 'react'

function UserInfo() {
    return (
        <div className='p-[20px] flex items-center justify-between'>
            <div className='flex items-center gap-[20px]'>
                <img className='w-10 h-10 object-cover rounded-full' src="./avatar.png" alt="" />
                <h2>Ayush Parekh</h2>
            </div>
            <div className='flex content-between gap-2'>
                <img className='w-[20px] h-[20px] cursor-pointer' src="./more.png" alt="" />
                <img className='w-[20px] h-[20px] cursor-pointer' src="./video.png" alt="" />
                <img className='w-[20px] h-[20px] cursor-pointer' src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo
