import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
// import '@react95/icons/icons.css';
import Item from './Item'

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;


function Jackpot({ items, closeJackpot, openNotepad, isMobile }) {
    return (
        <Modal
            icon="calculator"
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
                <FilesWrapper>
                    {
                        items.map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                                openNotepad={openNotepad}
                            />
                        ))
                    }
                </FilesWrapper>
            </Frame>
        </Modal>
    )
}

export default Jackpot
