import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <>
    <div className="header-container">
        <div className="header-left">
            <img src={logo} alt="" width='100px' />
            <ul>
                <li className="links">Home</li>
                <li className="links">TV shows</li>
                <li className="links">Movies</li>
                <li className="links">New & Popular</li>
                <li className="links">My List</li>
                <li className="links">Browse By Language</li>
            </ul>
        </div>
        <div className="header-right">
            <SearchIcon className='search-icon'/>
            <NotificationsNoneIcon className='notification-icon'/>
            <AccountBoxIcon className='account-icon'/>
            <ArrowDropDownIcon className='dropdown-icon'/>
        </div>
    </div>
    </>
  )
}

export default Header