import React, { useState } from 'react'

function Login() {
    const [avatar,setavatar]=useState({
        file:null,
        url:""
    })
    const handleAvatar=e=>{
        if (e.target.files[0]) {
            
            setavatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    return (
        <div className='w-full h-full flex items-center gap-5'>
            <div className='flex-1 items-center p-3 h-[300px] w-[50%]'>
                <h2 className='text-center text-4xl font-bold'>Welcome Back</h2>
                <form className='flex flex-col items-center gap-2 h-[80%] p-8'>
                    <input className='outline-none p-1.5 rounded w-full mt-1 bg-transparent' autoComplete='off' type="text" placeholder="Email" name="email"/>
                    <input className='outline-none p-1.5 rounded w-full mt-1 bg-transparent' autoComplete='off' type="password" placeholder="password" name="password"/>
                    <button className='w-[30%] p-1 mt-2 bg-purple-300/60 rounded-2xl'>Sign In</button>
                </form>
            </div>
            <div className='h-full w-0.5 bg-gray-400'></div>
            <div className='flex-1 items-center p-3 h-[400px] w-[50%]'>
            <h2 className='text-center text-4xl font-bold'>Create an account</h2>
                <form  className='flex flex-col items-center gap-2 h-[80%] p-8'>
                    <label htmlFor="file" className='rounded flex items-center flex-col'>
                        <img className='w-[80px] rounded-full h-[80px] object-cover' src={avatar.url||"./avatar.png"} alt=""/>
                        Upload an Image</label>
                    <input type="file" id='file' className='hidden' onChange={handleAvatar}/>
                    <input className='outline-none p-1.5 rounded w-full mt-1 bg-transparent' autoComplete='off' type="text" placeholder="Username" name="UIsername"/>
                    <input className='outline-none p-1.5 rounded w-full mt-1 bg-transparent' autoComplete='off' type="text" placeholder="Email" name="email"/>
                    <input className='outline-none p-1.5 rounded w-full mt-1 bg-transparent' autoComplete='off' type="password" placeholder="password" name="password"/>
                    <button className='w-[30%] p-1 mt-2 bg-purple-300/60 rounded-2xl'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
