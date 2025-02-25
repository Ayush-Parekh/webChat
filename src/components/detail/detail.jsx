import React from 'react'

function Detail() {
    return (
        <div className='flex-1 '>
            <div className='p-5 flex flex-col items-center gap-2 border-b border-purple-200/50'>
                <img className='object-cover rounded-full w-[70px] h-[70px]' src="./avatar.png" alt="" />
                <h2>Ayush Parekh</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='p-3 flex flex-col gap-3'>
                <div className='p-1 border-b'>
                    <div className='flex justify-between items-center'>
                        <span>Chat Setting</span>
                        <img className='w-[25px] h-[25px] p-1 bg-gray-400/50 rounded-full object-cover cursor-pointer' src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className='p-1 border-b'>
                    <div className='flex justify-between items-center'>
                        <span>Privacy</span>
                        <img className='w-[25px] h-[25px] p-1 bg-gray-400/50 rounded-full object-cover cursor-pointer' src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className='p-1 border-b'>
                    <div className='flex justify-between items-center'>
                        <span>Shared Photos</span>
                        <img className='object-cover w-[25px] p-1 h-[25px] bg-gray-400/50 rounded-full cursor-pointer' src="./arrowDown.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 mt-2'>
                        <div className='flex justify-between items-center gap-2 py-1'>
                            <div className='flex items-center gap-2'>
                                <img className='object-cover w-[40px] h-[40px] rounded ' src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces" alt="" />
                                <span className='text-sm text-gray-200'>AYush.png</span>
                            </div>
                            <img className='object-cover w-[20px] h-[20px] bg-gray-300/50 p-1 rounded-full cursor-pointer' src="./download.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center gap-2 py-1'>
                            <div className='flex items-center gap-2'>
                                <img className='object-cover w-[40px] h-[40px] rounded ' src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces" alt="" />
                                <span className='text-sm text-gray-200'>AYush.png</span>
                            </div>
                            <img className='object-cover w-[20px] h-[20px] bg-gray-300/50 p-1 rounded-full cursor-pointer' src="./download.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center gap-2 py-1'>
                            <div className='flex items-center gap-2'>
                                <img className='object-cover w-[40px] h-[40px] rounded ' src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces" alt="" />
                                <span className='text-sm text-gray-200'>AYush.png</span>
                            </div>
                            <img className='object-cover w-[20px] h-[20px] bg-gray-300/50 p-1 rounded-full cursor-pointer' src="./download.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center gap-2 py-1'>
                            <div className='flex items-center gap-2'>
                                <img className='object-cover w-[40px] h-[40px] rounded ' src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces" alt="" />
                                <span className='text-sm text-gray-200'>AYush.png</span>
                            </div>
                            <img className='object-cover w-[20px] h-[20px] bg-gray-300/50 p-1 rounded-full cursor-pointer' src="./download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='p-1 border-b'>
                    <div className='flex justify-between items-center'>
                        <span>Shared Files</span>
                        <img className='w-[25px] h-[25px] p-1 bg-gray-400/50 rounded-full object-cover cursor-pointer' src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button className='rounded bg-red-600/50 text-white p-1 border-none cursor-pointer hover:bg-red-600/80'>Block User</button>
            </div>
        </div>
    )
}

export default Detail
