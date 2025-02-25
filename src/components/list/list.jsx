import React from 'react'
import UserInfo from './userInfo/UserInfo'
import Chatlist from './chatlis/Chatlist'

function List() {
    return (
        <div className='flex-1 flex flex-col'>
            <UserInfo/>
            <Chatlist/>
        </div>
    )
}

export default List
