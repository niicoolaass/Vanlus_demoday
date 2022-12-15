import './Account.css';
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useState } from 'react';
import User from '../../../HomeResponsavel/components/Filter/imgs/tiorubens.jpg';
import Chat from '../Chat/Chat';
import {Link} from 'react-router-dom';

function ContaSeuCondutor() {
    const [chatVisible, setChatVisibility] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const [comentarios, setComentarios] = useState(
        <><div className="commit">Muito obrigado dona Maria, suas opiniões
            ajudam evoluir as minhas habilidades e
            divulgar meu trabalho.</div>
            <div className="commit">Muito obrigado dona Maria, suas opiniões
                ajudam evoluir as minhas habilidades e
                divulgar meu trabalho.</div></>)

    const addCommit = (mensagem) => {
        setComentarios(<>{comentarios}<div className="commit">{mensagem}</div></>);
    }

    return (
        <>
            <div className="container-a container-seu-condutor">
                <div className='container-b'>
                    <div className="container-ba">
                        <div className="header">
                            <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%" }} />
                        </div>
                        <span className='span1'>Rubens Migliorini</span>
                        <span className='span2'>Tio Rubens</span>
                        <span className='span3'><p>Com a Vanlus desde:</p><p>22/11/2022</p></span>
                        <div className='icones'>
                            <div onClick={() => { setChatVisibility(true) }}> <FaEnvelope color="var(--azul-claro-vanlus)" size={50} /></div>
                            <Link to="/aa"><BsCash color="var(--azul-claro-vanlus)" size={50} /></Link>
                            <AiOutlineStar color="var(--azul-claro-vanlus)" size={50} />
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
                    {comentarios}
                    <div className='comentario'>
                        <input
                            type="text"
                            placeholder='Comente sobre seu condutor'
                            onChange={(e) => { setMensagem(e.target.value) }}
                        ></input>
                        <div onClick={() => { addCommit(mensagem) }}>
                            <HiOutlinePaperAirplane color="var(--azul-vanlus)" size={20} />
                        </div>
                    </div>
                </div>

            </div>
            {chatVisible
                ? (
                    <>
                        <div onClick={() => { setChatVisibility(false) }} style={{ top: "0", left: "0", width: "100vw", height: "190vh", position: "fixed", zIndex: "99" }}></div>
                        <Chat src={User} apelido="Tio Rubens" mensagem="Muito obrigado dona Adrianna, suas opiniões ajudam evoluir as minhas habilidades e divulgar meu trabalho." />
                    </>
                )
                : null
            }
        </>
    )
}

export default ContaSeuCondutor;