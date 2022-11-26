import './Chat.css'
import { TbHeartHandshake } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Chat(props){
    return(
        <div className="chat-janela">
            <div className="chat-janela-header">
                <img src={props.src}></img>
                <span>{props.apelido}</span>
                <div>
                    <TbHeartHandshake size={25}/>
                    <AiOutlineInfoCircle size={25}/>
                    <BiSearch size={25}/>
                    <BsThreeDotsVertical size={25}/>
                </div>
            </div>
            <div className="chat-janela-conversation"></div>
            <div className="send-message"></div>
        </div>
    )
}

export default Chat;