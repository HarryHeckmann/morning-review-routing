import React from 'react'
import {Link} from 'react-router-dom'

function Main(){
    return(
        <div>
            <h1>Harry's Mexican/German Food Extravaganza</h1>
            <Link className='link' to='/german'>
                <img style={{width: '500px', height: '300px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png'/>
            </Link>
            <Link className='link' to='/mexican'>
                <img style={{width: '500px', height: '300px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png'/>
            </Link>
        </div>
        
    )
}

export default Main

