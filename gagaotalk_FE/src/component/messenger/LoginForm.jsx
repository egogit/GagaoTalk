import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import {useAuth} from "./UserContext";


const InputText = styled.input`
  width: 200px
`

const Form = styled.div`
  padding-top: 50px
`

const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  background-color: #503a3c;
`

function LoginForm(props){
    const [insertedId, setInsertedId] = useState('');
    const [insertedProfile, setInsertedProfile] = useState('');
    const {userId, register } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        userId && navigate('/main');
    }, [userId]);

    const registerHandler = (e) => {
        e.preventDefault();
        if(register(insertedId, insertedProfile)){
            setInsertedId("");
            setInsertedProfile("");
            return true;
        }
        return false;
    }

    return(
        <Form>
            <InputText type="text" placeholder="사용할 아이디" onChange={e => setInsertedId(e.target.value)}/><br/>
            <InputText type="text" placeholder="사용할 프로필 url" onChange={e => setInsertedProfile(e.target.value)}/><br/>
            <SubmitButton onClick={registerHandler}>입장하기</SubmitButton>
        </Form>
    )
}

export default LoginForm;