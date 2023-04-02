import React from 'react'
import styled from 'styled-components';
import { Modal, Frame,Tabs, Button, Fieldset,Checkbox,Dropdown } from '@react95/core'
// import { } from '@react95/core/components';
// import '@react95/icons/icons.css';
// import { , Tab } from '../components/Tabs';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: row;
`;


    
  

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
                <Tabs style={{ width: 350 }} defaultActiveTab="Pack">
                    <Tabs.Tab title="Portfolio">
                        <div>
                            <h2>Account</h2>
                            <Fieldset legend="Position" style={{ width: '300px' }}>
                                <CheckboxList>
                                    <Checkbox checked>QB</Checkbox> 
                                    <Checkbox checked>WR</Checkbox>
                                    <Checkbox checked>RB</Checkbox>
                                    <Checkbox checked>TE</Checkbox>
                                    
                                </CheckboxList>
                                
                            </Fieldset>
                            <Fieldset legend="Tier" style={{ width: '300px' }}>
                                <CheckboxList>
                                    <Checkbox checked>Common</Checkbox>
                                    <Checkbox checked>Select</Checkbox> 
                                    <Checkbox checked>Preferred</Checkbox>
                                    <Checkbox checked>Limited</Checkbox>
                                    
                                    
                                </CheckboxList>
                                {/* <Dropdown style={{ width: 200 }} options={['Rank','Alphabetical', 'Price']}  /> */}
                            </Fieldset>
                            <Fieldset legend="Sort" style={{ width: '300px' }}>
                                <Dropdown style={{ width: 200 }} options={['Rank','Alphabetical', 'Price']}  />
                            </Fieldset>
                            
                            
                            <p>Tier 1: Derrick Henry - 18th</p>
                            <p>Tier 1: Aaron Rodgers - 33rd</p>
                            <p>Tier 1: Russell Wilson - 50th</p>
                            <p>Tier 1: Cooper Kupp - 58th</p>
                            <p>Tier 1: Baker Mayfield - 159th</p>
                            
                        </div> 
                    </Tabs.Tab>
                    <Tabs.Tab title="Pack">
                        <Button  style={{ width: 230, marginLeft: 22 }} > Open Pack</Button>    
                    </Tabs.Tab>
                    <Tabs.Tab title="Collection">
                            <Fieldset legend="Add Players" style={{ width: '300px' }}>
                                <Dropdown style={{ width: 200 }} options={['','Patrick Mahomes II','Derrick Henry', 'Russell Wilson','Cooper Kupp','Baker Mayfield']}  />
                                <Dropdown style={{ width: 200 }} options={['','Patrick Mahomes II','Derrick Henry', 'Russell Wilson','Cooper Kupp']}  />
                                <Dropdown style={{ width: 200 }} options={['','Patrick Mahomes II','Derrick Henry', 'Cooper Kupp']}  />
                                <Dropdown style={{ width: 200 }} options={['','Derrick Henry', 'Cooper Kupp']}  />
                                <Dropdown style={{ width: 200 }} options={['','Derrick Henry']}  />
                                <br/>
                                <Button onClick={() => alert("Tier 2: Lamar Jackson - QB!")} style={{ width: 200 }} > Collect Players</Button>
                            </Fieldset>  
                    </Tabs.Tab>
                </Tabs>
                

            </Frame>
        </Modal>
    )
}

export default Jackpot
