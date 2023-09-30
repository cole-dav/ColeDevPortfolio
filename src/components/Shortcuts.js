import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'
import {startWebamp} from '../utils/startWebamp';
// import '@react95/icons/icons.css';

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer, openJackpot, openChatroom }) {
    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="windows_explorer"
                    onClick={() => openExplorer()}
                />
                <div>Explorer</div>
            </StyledShorcut>
            {/* <StyledShorcut>
                <Icon
                    className="pointer"
                    name="gcdef_100"
                    onClick={() => openJackpot()}
                />
                <div>Jackpot</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="file_pen"
                    onClick={()=>openChatroom()}
                />
                <div>Chatroom</div>
            </StyledShorcut> */}
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>Media</div>
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts
