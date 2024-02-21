import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='nav-left'>
                    <a className='brand' href='#'>
                        Task App
                    </a>
                </div>
                <div className='nav-right'>
                    <div className='tabs'>
                        <a href='https://wpwebinfotech.com'>Task Manager</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;