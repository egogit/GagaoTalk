import React, {useEffect, useState} from "react";
import styled from "styled-components";
import bottomAll from "../../static/bottomAll.png"
import bottomHome from "../../static/bottomHome.png"
import bottomPrev from "../../static/bottomPrev.png"
import {useNavigate} from "react-router-dom";

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f0f0f0;
`


function Bottom(props){
    const navigate = useNavigate();

    return (
        <BottomContainer>
            <img src={bottomAll} alt="lll"/>
            <img src={bottomHome} onClick={(e) =>navigate('/')} alt="ㅁ"/>
            <img src={bottomPrev} onClick={(e) =>navigate(-1)} alt="<"/>
        </BottomContainer>
    )
}

export default Bottom;