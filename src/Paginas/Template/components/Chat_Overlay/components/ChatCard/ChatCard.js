import './ChatCard.css'
import { useState } from 'react'
import Chat from '../../../Chat/Chat'


function ChatCard(props) {
    const [chatVisible, setChatVisible] = useState(false);
    return (
        <>
            <div onClick={() => { setChatVisible(true) }} className='conversation-card'>
                <img src={props.src}></img>
                <div>
                    <span>{props.apelido}</span>
                    <span>{props.mensagem}</span>
                </div>
            </div>
            {chatVisible
                ? (
                    <>
                        <div onClick={() => { setChatVisible(false) }} style={{top: "0", left: "0", width: "100vw", height: "190vh", position: "fixed", zIndex: "99" }}></div>
                        <Chat src={props.src} apelido={props.apelido}/>
                    </>
                )
                : null
            }
        </>

    )
}

export default ChatCard;