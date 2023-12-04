import React from "react";
import styled from "styled-components";

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const PhoneElement = styled.div`
  width: calc(315px*0.8);
  height: calc(700px*0.8);
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${props => props.bgColor || null};
  background-image: url(${props => props.url || null});
  background-size: ${props => props.url ? "cover" : "none"};
  background-position: ${props => props.url ? "center" : "none"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

function Phone(props) {

    return(
        <PhoneContainer>
            <PhoneElement url={props.url ? props.url : null} bgColor={props.bgColor ? props.bgColor : null}>
                {props.children}
            </PhoneElement>
        </PhoneContainer>
    )
}

export default Phone;