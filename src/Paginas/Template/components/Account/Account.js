import './Account.css'
import User from '../Header/img/adriana.jpg'
import { FaEnvelope } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";


export default function Account(props) {
    return {
        accountResposavel() {
            return (
                <div className="account acR">
                    <div className="info-pessoal">
                        <div className="header-ac">
                            <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%", marginRight: "25px" }} />
                        </div>
                        <form>
                            <span>Nome:</span>
                            <input type="text" value="Adriana Parravano Neves" disabled></input>
                            <span>Endereço:</span>
                            <input type="text" wrap="hard" value="Rua das Margaridas, 34, Santana, 03040-020" disabled></input>
                            <span>Telefone:</span>
                            <input type="tel" value="99999-9090" disabled></input>
                            <span>Email:</span>
                            <input type="email" value="adriana.pavarrano@gamil.com" disabled></input>
                            <span>RG:</span>
                            <input type="number" value="212915058" disabled></input>
                            <span>CPF:</span>
                            <input type="number" value="61520972822" disabled></input>
                        </form>

                    </div>
                    <div className="info-add">
                        <h2>Infromações do passageiro</h2>
                        <form>
                            <span>Nome:</span>
                            <input type="text" value="Mirella Parravano Neves" disabled></input>
                            <span>RG:</span>
                            <input type="number" value="243170580" disabled></input>
                            <span>CPF:</span>
                            <input type="number" value="95141750000" disabled></input>
                            <span>Escola:</span>
                            <input type="text" value="Escola Estadual São Domingues" disabled></input>
                            <span>Turno:</span>
                            <input type="text" value="Manhã (9:00 às 13:00), ida e volta" disabled></input>
                            <span>Possui necessidades especiais:</span>
                            <input type="text" value="Não" disabled></input>
                        </form>
                    </div>
                </div>)
        },
        accountCondutor() {
            return (<div className="account acC">
                <div className="info-pessoal">
                    <div className="header-ac">
                        <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%", marginRight: "25px" }} />
                    </div>
                    <form>
                        <span>Nome:</span>
                        <input type="text" value="Rubens Migliorini" disabled></input>
                        <span>Telefone:</span>
                        <input type="tel" value="98080-5243" disabled></input>
                        <span>Email:</span>
                        <input type="email" value="rubensmigliorini@gamil.com" disabled></input>
                        <span>RG:</span>
                        <input type="number" value="212915736" disabled></input>
                        <span>CPF:</span>
                        <input type="number" value="61582932822" disabled></input>
                    </form>

                </div>
                <div className="info-add">
                    <h2>Infromações do veículo</h2>
                    <form>
                        <span>Modelo do veículo:</span>
                        <input type="text" value="Van Transit" disabled></input>
                        <span>Número da placa:</span>
                        <input type="text" value="ABC-1234" disabled></input>
                        <span>CNH:</span>
                        <input type="number" value="82513736398" disabled></input>
                        <span>CRVL:</span>
                        <input type="text" style={{ color: "green" }} value="Aprovado pela Vanlus" disabled></input>
                        <span>Escola(s):</span>
                        <input type="text" value="Escola Estadual São Domingues" disabled></input>
                        <span>Horário(s):</span>
                        <input type="text" value="Manhã e Tarde" disabled></input>
                    </form>
                </div>
            </div>)
        },
        accountSeuCondutor() {
            return (<div className="account acR acCS">
            <div className="info-pessoal">
                <div className="header-ac">
                    <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%", marginRight: "25px" }} />
                </div>
                <span className="name">Rubens Migliorini</span>
                <span className="tio-name">Tio Rubens</span>
                <span className="time"><p>Com a Vanlus desde:</p><p>22/11/2022</p></span>
                <div className='icones'>
                    <FaEnvelope color="var(--azul-claro-vanlus)" size={50} />
                    <BsCash color="var(--azul-claro-vanlus)" size={50} />
                    <AiOutlineStar color="var(--azul-claro-vanlus)" size={50} />
                </div>
            </div>
            <div className="more-info">
                <div>
                    <p>5.0<AiFillStar color="black" /></p>
                    <p style={{ color: "var(--azul-vanlus)", fontWeight:"bold" }}>Avaliação</p>
                </div>
                <div>
                    <p>54</p>
                    <p style={{color:"var(--azul-vanlus)", fontWeight:"bold"}}>Passageiros</p>
                </div>
                <div>
                    <p>Van Transit - ABC-1234</p>
                    <p style={{color:"var(--azul-vanlus)", fontWeight:"bold"}}>Modelo da Van</p>
                </div>
            </div>
            <div className="info-add">
                <h2>Últimas avaliações</h2>
                <div className="commit">Muito obrigado dona Maria, suas opiniões
                    ajudam evoluir as minhas habilidades e
                    divulgar meu trabalho.</div>
                <div className="commit">Muito obrigado dona Maria, suas opiniões
                    ajudam evoluir as minhas habilidades e
                    divulgar meu trabalho.</div> 
            </div>
            <div className='comentario'>
                <input type="text" placeholder='Comente sobre seu condutor'></input>
                <div>
                    <HiOutlinePaperAirplane color="var(--azul-vanlus)" size={20}/>
                </div>
            </div>
        </div>)
        },
        accountCondutores() {
            return (<div className="account acR acCS">
                <div className="info-pessoal">
                    <div className="header-ac">
                        <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%", marginRight: "25px" }} />
                    </div>
                    <span className="name">Rubens Migliorini</span>
                    <span className="tio-name">Tio Rubens</span>
                    <span className="time"><p>Com a Vanlus desde:</p><p>22/11/2022</p></span>
                    <div className='icones'>
                        <FaEnvelope color="var(--azul-claro-vanlus)" size={50} />
                        <TbHeartHandshake color="var(--azul-claro-vanlus)" size={50} />
                    </div>
                </div>
                <div className="more-info">
                    <div>
                        <p>5.0<AiFillStar color="black" /></p>
                        <p style={{ color: "var(--azul-vanlus)", fontWeight:"bold" }}>Avaliação</p>
                    </div>
                    <div>
                        <p>54</p>
                        <p style={{color:"var(--azul-vanlus)", fontWeight:"bold"}}>Passageiros</p>
                    </div>
                    <div>
                        <p>Van Transit - ABC-1234</p>
                        <p style={{color:"var(--azul-vanlus)", fontWeight:"bold"}}>Modelo da Van</p>
                    </div>
                </div>
                <div className="info-add">
                    <h2>Últimas avaliações</h2>
                    <div className="commit">Muito obrigado dona Maria, suas opiniões
                        ajudam evoluir as minhas habilidades e
                        divulgar meu trabalho.</div>
                    <div className="commit">Muito obrigado dona Maria, suas opiniões
                        ajudam evoluir as minhas habilidades e
                        divulgar meu trabalho.</div>
                </div>
            </div>)
        }
    }
}