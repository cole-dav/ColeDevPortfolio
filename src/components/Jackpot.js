import React from 'react'
import { Modal, Frame, ProgressBar } from '@react95/core'
// import '@react95/icons/icons.css';



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
                top: '30%',
                width: isMobile ? '90%' : 400,
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
                
               <ProgressBar style={{ flex: 1 }} width={isMobile ? 150 : 200} percent={30} />
               

            </Frame>
        </Modal>
    )
}

export default Jackpot
