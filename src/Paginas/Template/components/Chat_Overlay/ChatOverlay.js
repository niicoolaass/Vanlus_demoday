import './ChatOverlay.css'
import {useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ChatCard from './components/ChatCard/ChatCard'
import ChatBot from './img/chat-bot.jpeg';
import TiaMarcia from '../../../HomeResponsavel/components/Filter/imgs/tiamarcia.jpg'
import TioRubens from '../../../HomeResponsavel/components/Filter/imgs/tiorubens.jpg'

function ChatOverlay(props){
    const [heightOverlay, setHeight]=useState(false);
    return(
    
        <div  style={{width:"20vw", height:heightOverlay ? "80vh":"8vh", backgroundColor:"var(--background-main)", position:"fixed",bottom:"0", right:"10px", borderRadius:"20px 20px 0 0", boxShadow:"0px -1px 14px 0px rgba(0,0,0,0.33)", transition:"all .3s ease-in-out"}}>
            <div className="header-chat-overlay" style={{backgroundColor:props.color, color:props.color==="var(--amarelo-fraco-vanlus)"?"var(--amarelo-escuro-vanlus)":"white"}} >
                <span>Mensagens</span>
                <div onClick={()=>{setHeight(!heightOverlay)}} style={{transform:heightOverlay?"rotate(0)":"rotate(180deg)"}}><IoIosArrowDown size={30}/></div>
            </div>
            <ChatCard src={ChatBot} color={props.color} apelido="Suporte" mensagem="Como eu posso ajudar =)"/>
            <ChatCard src={TioRubens} color={props.color} apelido="Tio Rubens" mensagem="Muito obrigado dona..."/>
            <ChatCard src={TiaMarcia} color={props.color} apelido="Tia Márcia" mensagem="Obrigado por..."/>
        </div>
    )
}

export default ChatOverlay;