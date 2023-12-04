import React, {useState} from "react";
import styled from "styled-components";
import {useAuth} from "../messenger/UserContext";
import axios from "axios";
import chatrooms from "../data/chatroom.json";

const InputContainer = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0;
  width: 100%;
  display: flex;
`

const MessageInp = styled.input`
  width: 80%;
`

const Button = styled.button`
  width: 20%
`

function MessageInput(props) {
    const {userId, changeNameToId} = useAuth()
    const [insertedMsg, setInsertedMsg] = useState('');

    const writeMsg = (e) => {
        e.preventDefault();
        if(!insertedMsg){
            alert("메시지를 입력해주세요.");
            return false;
        }

        let cid = props.id*100000;
        for(let chatroom of chatrooms){
            if(parseInt(chatroom.id) === parseInt(props.cid)){
                cid += (chatroom.chats.length + 1);
                break;
            }
        }
        const  uid = changeNameToId(userId);

        axios.post('http://localhost:8080/addMsg',{
            id: props.id,
            cid: cid,
            uid: uid,
            content: insertedMsg
        }).then((res) => {
            setInsertedMsg("");
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    return (
        <InputContainer>
            <MessageInp type="text" value={insertedMsg} onChange={(e) => setInsertedMsg(e.target.value)}/>
            <Button onClick={writeMsg}>전송</Button>
        </InputContainer>
    )

}
export default MessageInput;