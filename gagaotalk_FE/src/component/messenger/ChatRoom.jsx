import React, {useEffect, useState} from "react";
import styled from "styled-components";
import UserImage from "../ui/UserImage";
import {useNavigate} from "react-router-dom";

const ChatRoomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;

const UserNameText = styled.b`
  font-size: 15px;
`

const UserChatText = styled.div`
  font-size: 10px;
  color: gray;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`


function ChatRoom(props){
    const navigate = useNavigate();

    return(
        <ChatRoomContainer onClick={(e) => navigate(`/chat/${props.cid}`)}>
            <UserImage url={props.url} width="35px" height="35px"/>
            <div>
                <UserNameText>{props.user}</UserNameText>
                <UserChatText>{props.chat}</UserChatText>
            </div>
        </ChatRoomContainer>
    )
}

export default ChatRoom;