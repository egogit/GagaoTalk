import React from "react";
import styled from "styled-components";

import addChat from "../../static/addChat.png"
import logoutButton from "../../static/logout.png"
import axios from "axios";
import {useAuth} from "./UserContext";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 30px;
  left: 5px;
  width: calc(100% - 10px);
  height: 35px;
`

const AddChatButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

const LogoutButton = styled.img`
  padding-left: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

function Menu(props){
    const {userId, logout} = useAuth()

    const addChatRoomHandler = (e) => {
        axios.post('http://localhost:8080/addChatroom',{
            name: userId,
        }).then((res) => {
            console.log("채팅방을 새로 만들었습니다.")
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    return (
        <MenuContainer>
            <p><b>{props.name}</b></p>
            <div>
                {props.show && <AddChatButton onClick={addChatRoomHandler} src={addChat} alt="+"/>}
                {props.show && <LogoutButton onClick={logout} src={logoutButton} alt="logout"/>}
            </div>
        </MenuContainer>
    )
}

export default Menu;