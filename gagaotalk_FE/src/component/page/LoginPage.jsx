import React, {useEffect} from "react";
import Phone from "../ui/Phone";
import loginLogo from "../../static/loginLogo.png"
import LoginForm from "../messenger/LoginForm";
import Clock from "../messenger/Clock";
import Bottom from "../messenger/Bottom";
import {useAuth} from "../messenger/UserContext";
import {useNavigate} from "react-router-dom";

function MainPage(props) {
    const {userId, register } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        userId && navigate('/main');
    }, [userId]);

    return(
        <Phone url="null" bgColor="#fae100">
            <Clock />
            <img src={loginLogo} alt="loginlogo"/>
            <LoginForm/>
            <Bottom/>
        </Phone>
    )
}

export default MainPage;