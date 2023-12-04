import React, {useEffect} from "react";
import Phone from "../ui/Phone";
import initPage from "../../static/initPage.png";
import {useNavigate} from "react-router-dom";
import Clock from "../messenger/Clock";
import Bottom from "../messenger/Bottom";

function ProcessPage(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/login');
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return(
        <Phone url={initPage} bgColor="null">
            <Clock />
            <Bottom/>
        </Phone>
    )
}

export default ProcessPage;