import React from "react";
import styled from "styled-components";


const UserImg = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 15px;
  padding-right: 10px;
`

function UserImage(props) {

    return(
        <UserImg src={props.url} width={props.width} height={props.height}/>
    )
}

export default UserImage;