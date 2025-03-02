import { useState } from 'react'
import Chat from './components/chat/chat'
import Detail from './components/detail/detail'
import List from './components/list/list'
import Notification from './components/notification/Notification'
import Login from './components/Login'
function App() {
  const user = true

  return (   

    <div className="w-screen h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('/image.png')" }}>
      <div className='w-[90%] h-[90%] rounded-[30px] text-white absolute bg-black/30 backdrop-blur-lg flex'>
        {
          user?(
            <>
              <List/>
              <Chat/>
              <Detail/>
            </>
          ):(<Login/>)

        }
        <Notification/>
       
      </div>
    </div>
  )
}

export default App
