import React, {useEffect, useState} from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #282c34;
  color: white;
`

function Clock(props){

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return() => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <ClockContainer>{formattedTime}</ClockContainer>
    )
}

export default Clock;