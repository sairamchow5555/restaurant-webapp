import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='/'>Restaurant</a>
            <button className='btn btn-primary'>
                Orders&nbsp;
                <span className='badge bg-danger'>0</span>
            </button>
        </nav>
    </div>
  )
}

export default Header
