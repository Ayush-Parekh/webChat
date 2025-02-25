import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
function Chat() {
    const [emoji,setemoji]=useState(false)
    const [text,settext]=useState("")

    // const endRef = useRef(null)
    const handleemoji=e=>{
        settext((prev)=>prev+e.emoji);    

    }
    return (
        <div className='p-2 flex flex-2 border-l border-r border-purple-200/50 h-full flex-col'>
            <div className='flex items-center justify-between border-b border-purple-200/50 gap-5'>
                <div className='flex p-2 gap-2'>
                    <img className='border-[1px] border-purple-200/50 w-[50px] h-[50px] rounded-full object-cover' src="./avatar.png" alt="" />
                    <div className='flex flex-col g-2'>
                        <span className='text-gray-400 font-bold '>Sonal Parekh</span>
                        <p className='font-light text-gray-300'>Lorem, ipsum dolor sit amet Odit veniam .</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <img className='w-[25px] h-[25px]' src="./phone.png" alt="" />
                    <img className='w-[25px] h-[25px]' src="./video.png" alt="" />
                    <img className='w-[25px] h-[25px]' src="./info.png" alt="" />
                </div>
            </div>
            <div className='p-[20px] flex flex-1 overflow-scroll flex-col gap-2'>
                <div className='max-w-[70%] flex gap-2'>
                    <img className='h-[40px] w-[40px] object-cover rounded-full' src="./avatar.png" alt="" />
                    <div className='flex-1 flex-col flex gap-2'>
                        <p className='p-2 bg-purple-200/20 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] gap-2 self-end'>
                    <div className=''>
                        <img className='w-full h-[200px] mb-2 rounded-xl object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg" alt="" />
                        <p className='bg-purple-200/80 p-2 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] flex gap-2'>
                    <img className='h-[40px] w-[40px] object-cover rounded-full' src="./avatar.png" alt="" />
                    <div className='flex-1 flex-col flex gap-2'>
                        <p className='p-2 bg-purple-200/20 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] gap-2 self-end'>
                    <div className=''>
                        <img className='w-full h-[200px] mb-2 rounded-xl object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg" alt="" />
                        <p className='bg-purple-200/80 p-2 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] flex gap-2'>
                    <img className='h-[40px] w-[40px] object-cover rounded-full' src="./avatar.png" alt="" />
                    <div className='flex-1 flex-col flex gap-2'>
                        <p className='p-2 bg-purple-200/20 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] gap-2 self-end'>
                    <div className=''>
                        <img className='w-full h-[200px] mb-2 rounded-xl object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg" alt="" />
                        <p className='bg-purple-200/80 p-2 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] flex gap-2'>
                    <img className='h-[40px] w-[40px] object-cover rounded-full' src="./avatar.png" alt="" />
                    <div className='flex-1 flex-col flex gap-2'>
                        <p className='p-2 bg-purple-200/20 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                <div className='max-w-[70%] gap-2 self-end'>
                    <div className=''>
                        <img className='w-full h-[200px] mb-2 rounded-xl object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg" alt="" />
                        <p className='bg-purple-200/80 p-2 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nemo voluptate quidem tempore natus culpa labore enim recusandae deserunt porro aspernatur facere, quam iure ipsum qui? Exercitationem, sapiente repellat.
                        </p>
                        <span className='text-sm'>1 min ago</span>
                    </div>
                </div>
                {/* <div ref={endRef}></div> */}
            </div>
            <div className='p-2 flex items-center justify-between border-t border-purple-200/50 gap-1.5 mt-auto'>
                <div className='flex items-center justify-between gap-5'>
                    <img className='w-[20px] h-[20px] cursor-pointer' src="./img.png" alt="" />
                    <img className='w-[20px] h-[20px] cursor-pointer' src="./camera.png" alt="" />
                    <img className='w-[20px] h-[20px] cursor-pointer' src="./mic.png" alt="" />
                </div>
                <input className='flex flex-1 border-none outline-none text-white bg-purple-200/50 rounded p-1.5 ' type="text"  placeholder='type a message...' value={text} onChange={(e)=>settext(e.target.value)}/>
                <div className='relative'>
                    <img className='w-[25px] h-[25px] cursor-pointer' src="./emoji.png" alt="" onClick={()=>setemoji((prev)=>!prev)} />
                    <div className='absolute bottom-[50px] left-0'>

                        <EmojiPicker open={emoji} onEmojiClick={handleemoji}/>
                    </div>
                </div>
                <button className='bg-purple-400 text-white p-1 border-none rounded-md cursor-pointer'>Send</button>
            </div>
        </div>
    )
}

export default Chat
