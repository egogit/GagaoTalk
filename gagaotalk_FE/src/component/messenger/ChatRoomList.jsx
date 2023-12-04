import React from "react";
import styled from "styled-components";
import ChatRoom from "./ChatRoom";
import chatrooms from "../data/chatroom.json";
import {useAuth} from "./UserContext";

const ChatContainer = styled.div`
  width: 93%;
  height: 85%;
  border-radius: 10px;
  padding-top: 30px;
  position: absolute;
  top: 70px;
  left: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function ChatRoomList(props){
    const { userId, getProfilePic,  changeNameToId} = useAuth();

    return(
        <ChatContainer>
            {
                chatrooms.map(item => {
                    if(item.participant.includes(userId)) {
                        let sender = item.chats.length - 1 >= 0 ? item.chats[item.chats.length - 1].sender : changeNameToId(userId);
                        let chat
                            = item.chats.length - 1 >= 0 ? item.chats[item.chats.length - 1].chat : "";
                        return <ChatRoom key={item.id} cid={item.id} user={item.participant.join()}
                                         url={getProfilePic(sender)} chat={chat}/>
                    }
                })
            }

        </ChatContainer>
    )
}

export default ChatRoomList;