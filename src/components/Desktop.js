import React, { useState, useContext, useEffect } from 'react'
import Explorer from './Explorer'
import Jackpot from './Jackpot'
import Notepad from './Notepad';
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';
import Player from './Player'; 
import Chatroom from './Chatroom';

function Desktop() {

    const isMobile = window.innerWidth < 850;

    const data = useContext(DataContext);
    const [explorerOpened, toggleExplorer] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [jackpotOpened, toggleJackpot] = useState(false);
    const [chatroomOpened, toggleChatroom] = useState(false);
    // const [selectedAction, setSelectedAction] = useState(null);
    const [notepadOpened, toggleNotepad] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            const files = data.getItems();
            setItems(files);
            toggleExplorer(true);
            toggleJackpot(false);
            toggleChatroom(false);
            setSelectedItem(files[0]);
            // setSelectedAction(files[0]);
            toggleNotepad(!isMobile);
        }, [data, isMobile]);


    const closeExplorer = () => {
        toggleExplorer(false);
    };

    const openExlorer = () => {
        toggleExplorer(true);
    };

    const closeJackpot = () => {
        toggleJackpot(false);
    };

    const openJackpot = () => {
        toggleJackpot(true);
    };

    const closeChatroom = () => {
        toggleChatroom(false);
    };

    const openChatroom = () => {
        toggleChatroom(true);
    };
     

    const closeNotepad = () => {
        toggleNotepad(false);
    };

    const openNotepad = (item) => {
        setSelectedItem(item)
        toggleNotepad(true);
    };

    return (
        <React.Fragment>
            <Shortcuts openExplorer={openExlorer } openJackpot={openJackpot} openChatroom={openChatroom}/>
            
            {
                explorerOpened && (
                    <Explorer items={items} closeExplorer={closeExplorer} openNotepad={openNotepad} isMobile={isMobile} />
                )
            }
            {
                notepadOpened && (
                    <Notepad closeNotepad={closeNotepad} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
            { 
                jackpotOpened && (
                    <Jackpot items={items} closeJackpot={closeJackpot} openNotepad={openNotepad} isMobile={isMobile} />
                )
            }
            { 
                chatroomOpened && (
                    <Chatroom items={items} closeChatroom={closeChatroom} openNotepad={openNotepad} isMobile={isMobile} />
                )
            }
            
            <Player />
        </React.Fragment>
    )
}

export default Desktop
