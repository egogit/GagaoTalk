import React from "react";
import {useNavigate} from "react-router-dom";
import appIcon from "../../static/icon.png";
import Phone from "../ui/Phone";
import background from "../../static/background.jpg";
import Clock from "../messenger/Clock";
import Bottom from "../messenger/Bottom";

const styles={
    icon: {
        width: "60px",
        height: "60px"
    },
    appIcon: {
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
    },
    appName: {
        color:"white"
    }
}


function InitPage(props) {

    const navigate = useNavigate();

    return(
        <Phone url={background}>
            <Clock />
            <div style={styles.appIcon}>
                <img src={appIcon} style={styles.icon} onClick={() => navigate('/process')} alt="icon" />
                <div style={styles.appName}>GagaoTalk</div>
            </div>
            <Bottom/>
        </Phone>
    )
}

export default InitPage;