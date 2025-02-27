import React from 'react'

function Adduser() {
    return (
        <div className='p-2 bg-sky-200/50 rounded absolute inset-0 w-fit h-fit m-auto'>
            <form>
                <input type="text" placeholder='UserName' name='UserName' />
                <button>Search</button>
            </form>
            <div>
                <div>
                    <img src="./avatar.png" alt="" />
                    <span>Ayush Parekh</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default Adduser