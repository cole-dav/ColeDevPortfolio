import React from 'react'
import { Modal, Frame,Tabs, Input, Button } from '@react95/core'
// import { } from '@react95/core/components';
// import '@react95/icons/icons.css';
// import { , Tab } from '../components/Tabs';



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
                
                {/* <ProgressBar style={{ flex: 1 }} width={isMobile ? 150 : 200} percent={30} /> */}
                <br />
                <Tabs style={{ width: 350 }} defaultActiveTab="Portfolio">
                    <Tabs.Tab title="Portfolio">
                        <div>
                            <h2>Account</h2>
                            <p>Rank 1: Josh Allen</p>
                        </div> 
                    </Tabs.Tab>
                    <Tabs.Tab title="Pack">
                        <Button style={{ width: 230, marginLeft: 22 }} > Open Pack</Button>    
                    </Tabs.Tab>
                    <Tabs.Tab title="Collection">
                        <Input style={{ width: 180, marginLeft: 22 }} />    
                    </Tabs.Tab>
                </Tabs>
                

            </Frame>
        </Modal>
    )
}

export default Jackpot
