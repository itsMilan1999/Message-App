import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "./StateProvider";

function Header() {
    const [ {user}] = useStateValue();
    return <div className="header">
        <div className="header_left">
            <Avatar className="header_Avatar" alt={user?.displayName} src={user?.photoURL} />         {/*Avtart for login user */}
            <AccessTimeIcon />                                              {/* Time icon */}
        </div>
        <div className="header_search">
            <SearchIcon />                          {/* Search Icon */}
            <input placeholder="Search hear" />     {/* Input */}
        </div>

        <div className="heard_right">
            <HelpOutlineIcon />                     {/* Help Icon */}            
        </div>
    </div>



}
export default Header