import React from 'react'
// import styled from 'styled-components';
import { Modal, Frame,ProgressBar } from '@react95/core'
// import { } from '@react95/core/components';
// import '@react95/icons/icons.css';
// import { , Tab } from '../components/Tabs';

// const CheckboxList = styled.div`
//   display: flex;
//   flex-direction: row;
// `;


    
  

// const FilesWrapper = styled.div`
// 	display: flex;
// 	grid-template-columns: repeat(4, 1fr);
// 	flex-wrap: wrap;
// `;


function Jackpot({ items, closeJackpot, openNotepad, isMobile }) {
    return (
        <Modal
            icon="gcdef_100"
            title="Jackpot"
            closeModal={closeJackpot}
            style={{
                left: isMobile ? '5%' : '15%',
                top: isMobile ? '3%' : '15%',
                width: isMobile ? '95%' : 400,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
            >
 
               <ProgressBar style={{ flex: 1 }} width={isMobile ? 150 : 200} percent={32} />

            </Frame>
        </Modal>
    )
}

export default Jackpot
