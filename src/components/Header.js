import React, { useState } from 'react'
import '../style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'

import Modal from './Modal';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    let isLoggedIn = true;


    
    return (
        <div className="header">

            <Link to="/">
                <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="" />
            </Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />


                { !isLoggedIn && <div>
                        <Avatar className="avatar-icon" onClick={() => setIsOpen(true) } />
                        <Modal open={isOpen} onClose={() => setIsOpen(false) } />
                    </div> }

                { isLoggedIn && <div style={{position: 'relative'}}> 
                        <div className="avatar-box">
                        <svg className="burger-menu" viewBox="0 0 100 80" width="15" height="15">
                            <rect width="100" height="15"></rect>
                            <rect y="30" width="100" height="15"></rect>
                            <rect y="60" width="100" height="15"></rect>
                        </svg>
                        <Avatar className="avatar-icon" onClick={() => setIsOpen(true) } /> 
                    </div>
                        <div className="dropdown">
                            <div className="dropdown-item">Nachrichten</div>
                            <div className="dropdown-item">Benachrichtigungen</div>
                            <div className="dropdown-item">Reisen</div>
                        </div>
                    </div> }

            </div>
        </div>
    )
}

export default Header
