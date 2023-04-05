import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div>
        <Link to="/" className='link-button'>Home</Link>
        </div>
          <div>
          <Link to="/bookmark" className='link-button'>Bookmark</Link>
         </div>
          
    </div>
  )
}

export default Header