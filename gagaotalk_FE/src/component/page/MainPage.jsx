import React, {useEffect} from "react";
import Phone from "../ui/Phone";
import Clock from "../messenger/Clock";
import Bottom from "../messenger/Bottom";
import Menu from "../messenger/Menu";
import ChatRoomList from "../messenger/ChatRoomList";
import {useAuth} from "../messenger/UserContext";
import {useNavigate} from "react-router-dom";


function MainPage(props) {

    const {userId} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        userId ? navigate('/main') : navigate('/login');
    }, [userId]);

    return(
        <Phone>
            <Clock />
            <Menu name="채팅" show={true}/>
            <ChatRoomList />
            <Bottom/>
        </Phone>
    )
}

export default MainPage;