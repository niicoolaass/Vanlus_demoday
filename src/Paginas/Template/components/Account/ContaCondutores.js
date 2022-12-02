import './Account.css';
import { FaEnvelope } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TbHeartHandshake } from "react-icons/tb";
import {useState} from 'react';
import Chat from '../Chat/Chat';

function ContaCondutores(props) {
    const [chatVisible, setChatVisibility]=useState(false)
    return (
        <>
            <div className="container-a container-seu-condutor" style={{zIndex:"103"}}>
                <div className='container-b'>
                    <div className="container-ba">
                        <div className="header">
                            <img alt="userPhoto" src={props.src} width="100px" height="100px" style={{ borderRadius: "50%" }} />
                        </div>
                        <span className='span1'>{props.nome_condutor}</span>
                        <span className='span2'>{props.apelido}</span>
                        <span className="span4">{props.description}</span>
                        <span className='span3'><p>Com a Vanlus desde:</p><p>22/11/2022</p></span>
                        <div className='icones'>
                        <div onClick={()=>{setChatVisibility(true)}}> <FaEnvelope color="var(--azul-claro-vanlus)" size={50} /></div>
                       
                        <TbHeartHandshake color="var(--azul-claro-vanlus)" size={50} />
                    </div>
                    </div>
                    <div className="container-bb">
                        <div>
                            <p>5.0<AiFillStar color="black" /></p>
                            <p style={{ color: "var(--azul-vanlus)", fontWeight: "bold" }}>Avaliação</p>
                        </div>
                        <div>
                            <p>54</p>
                            <p style={{ color: "var(--azul-vanlus)", fontWeight: "bold" }}>Passageiros</p>
                        </div>
                        <div>
                            <p>Van Transit - ABC-1234</p>
                            <p style={{ color: "var(--azul-vanlus)", fontWeight: "bold" }}>Modelo</p>
                        </div>
                    </div>
                </div>
                <div className='container-c'>
                    <h2>Últimas avaliações</h2>
                    <div className="commit">Muito obrigado dona Maria, suas opiniões
                        ajudam evoluir as minhas habilidades e
                        divulgar meu trabalho.</div>
                    <div className="commit">Muito obrigado dona Maria, suas opiniões
                        ajudam evoluir as minhas habilidades e
                        divulgar meu trabalho.</div>
                </div>

            </div>
            {chatVisible
                ? (
                    <>
                        <div onClick={() => { setChatVisibility(false) }} style={{top: "0", left: "0", width: "100vw", height: "190vh", position: "fixed", zIndex: "99" }}></div>
                        <Chat src={props.src} apelido={props.apelido} mensagem="Muito obrigado dona Adrianna, suas opiniões ajudam evoluir as minhas habilidades e divulgar meu trabalho."/>
                    </>
                )
                : null
            }
        </>
    )
}

export default ContaCondutores;