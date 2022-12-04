import './Chat.css'
import { TbHeartHandshake } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { BiCheckDouble } from "react-icons/bi";
import {useState} from 'react';

function Chat(props) {
    const date = new Date();

    const [mensagem, setMensagem] = useState("");

    const [newMensagem, setNewMensagem] = useState("")

    const enviarMensagem = (texto) => {
        setNewMensagem(<>{newMensagem}<div className="message responsavel">
        <span>{texto}</span>
        <div>
            {date.getHours()}:{date.getMinutes()}
            <BiCheckDouble size={20}/>
        </div>
    </div></>);
    }
    return (
        <div className="chat-janela">
            <div className="chat-janela-header" style={{backgroundColor:props.color, color:props.color==="var(--amarelo-fraco-vanlus)"?"var(--amarelo-escuro-vanlus)":"white"}}>
                <img alt="user" src={props.src}></img>
                <span>{props.apelido}</span>
                <div>
                    <TbHeartHandshake size={25} />
                    <AiOutlineInfoCircle size={25} />
                    <BiSearch size={25} />
                    <BsThreeDotsVertical size={25} />
                </div>
            </div>
            <div className="chat-janela-conversation">
                <div className="message responsavel">
                    <span>Oi Rubens, Tudo bem? Obrigado por trazer o Enzo em segurança. Seus serviços são excelntes. </span>
                    <div>
                        10:40
                        <BiCheckDouble size={20}/>
                    </div>
                </div>
                <div className="message condutor">
                    <span>{props.mensagem}</span>
                    <div>
                        10:40
                        <BiCheckDouble size={20}/>
                    </div>
                </div>
                {newMensagem}
            </div>
            <div className="send-message">
                <input 
                type="text" 
                placeholder='Mensagem'
                onChange={(e) => { setMensagem(e.target.value) }}></input>
                <div onClick={() => { enviarMensagem(mensagem) }}>
                    <HiOutlinePaperAirplane color="var(--azul-vanlus)" size={20} />
                </div>
            </div>
        </div>
    )
}

export default Chat;