import React from "react";
import styled from "styled-components";
import {useAuth} from "../messenger/UserContext";

const ChatContainer = styled.div`
  display: flex;
  float: left;
`

const UserChatContainer = styled.div`
  text-align: right;
  display:flex;
  float: right;
`

const ImgContainer= styled.div`
  display: inline-block;
`

const Wrapper = styled.div`
  margin: 8px;
  padding: 8px;
  padding-bottom: 16px;
  display: inline-block;
  border: 1px solid gray;
  border-radius:16px;
  height: 20%;
  width: 80%;
  background-color: #ffeb33;
`

const Profile = styled.img`
  width:30px;
  height:30px;
  border-radius:10px;
  margin-right:10px;
`

const MessageContainer = styled.div`
  margin-bottom:8px;
  padding-bottom:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color: black;
  font-size: 10px;
  width: 100%
`

const UserMsg = styled.div`
  padding-right: 10px;
  flex: 1;
`

const NameText = styled.div`
  color: black;
  font-size: 10px;
`


function Message(props) {
    const {userId, getProfilePic, changeNameToId} = useAuth()

    if(changeNameToId(userId) !== props.id){
        return(
            <ChatContainer>
                <ImgContainer>
                    <Profile src={getProfilePic(props.id)} height={'40px'} width={'40px'}/>
                </ImgContainer>
                <div style={{flex: 1}}>
                    <NameText>{props.sender}</NameText>
                    <Wrapper>
                        <MessageContainer>
                            {props.message}
                        </MessageContainer>
                    </Wrapper>
                </div>
            </ChatContainer>
        )
    }else{
        return(
            <UserChatContainer>
                <UserMsg>
                    <NameText>{props.sender}</NameText>
                    <Wrapper>
                        <MessageContainer>
                            {props.message}
                        </MessageContainer>
                    </Wrapper>
                </UserMsg>
                <ImgContainer>
                    <Profile src={getProfilePic(props.id)} height={'30px'} width={'30px'}/>
                </ImgContainer>
            </UserChatContainer>
        )
    }
}

export default Message;