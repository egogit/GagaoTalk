import React, {useEffect} from "react";
import Phone from "../ui/Phone";
import Clock from "../messenger/Clock";
import Bottom from "../messenger/Bottom";
import Menu from "../messenger/Menu";
import Message from "../ui/Message";

import {useNavigate, useParams} from "react-router-dom";
import chatrooms from "../data/chatroom.json";
import styled from "styled-components";
import MessageInput from "../ui/MessageInput";
import {useAuth} from "../messenger/UserContext";

const ChatContainer = styled.div`
  width: 93%;
  height: 85%;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  left: 10px;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

function ChatViewPage(props) {
    const { chatId } = useParams();
    const {userId} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        !userId && navigate('/login');
    }, [userId]);

    let chatList=null;
    for (let chatroom of chatrooms){
        if (chatroom.id === parseInt(chatId)){
            chatList =chatroom;
            break;
        }
    }

    const {changeIdToName} = useAuth();

    return(
        <Phone bgColor="#bacee0">
            <Clock />
            <Menu name={chatList.name} show={false}/>
            <ChatContainer>
                {
                    chatList.chats.map(item =>{
                        return <Message key={item.id} name={chatList.name} sender={changeIdToName(item.sender)} message={item.chat} id={item.sender}/>
                    })
                }
            </ChatContainer>
            <MessageInput id={chatList.id}/>
            <Bottom/>
        </Phone>
    )
}

export default ChatViewPage;