import React from 'react';
import './Sidenav.css'
import SidebarChat from '../SidebarChat/SidebarChat';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { SearchOutlined } from '@material-ui/icons';


const Sidenav = () => {
    return (
        <div className="sidenav">

            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="search__container">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <input
                        placeholder="Search or start new Chat"
                        type="text"
                    />
                </div>
            </div>

            <div className="sidebar__chat">
            <SidebarChat/>
            </div>

        </div>
    )
}
export default Sidenav;