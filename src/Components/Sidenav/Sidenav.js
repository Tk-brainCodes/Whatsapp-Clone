import React, { useEffect, useState } from 'react';
import './Sidenav.css'
import SidebarChat from '../SidebarChat/SidebarChat';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { SearchOutlined } from '@material-ui/icons';
import db from '../../firebase';
import {useStateValue} from '../../stateProvider';


const Sidenav = () => {
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unSubscribe = db.collection('rooms').onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),

                }
            )))
            return () => {
                unSubscribe();
            }
        })
    }, []);
    return (
        <div className="sidenav">

            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
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
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat
                        key={room.id}
                        id={room.id}
                        name={room.data.name}
                    />
                ))}
            </div>

        </div>
    )
}
export default Sidenav;