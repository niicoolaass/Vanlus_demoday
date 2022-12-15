import './Acompanhamento.css';
import BoyLook from './img/boylooking.png'
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Mapa from './components/Mapa/Mapa';
import Header from '../Template/components/Header/Header';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import ContaResponsavel from '../Template/components/Account/ContaReponsavel';
import User from '../Template/components/Header/img/adriana.jpg'


function Acompanhamento() {

    return (
        <>
        <div className="homeR">
        {Sidebar().acompanhamento_responsavel()}
            <div>
                <Header srcUser={User} typeAccount={<ContaResponsavel/>} cor="modal-user blue" />
                <div style={{ display: "flex" }}>
                <Mapa />
                </div>
            </div>
            <ChatOverlay color="var(--azul-vanlus)"/>
        </div>
        <img alt="sidebar-img" src={BoyLook} height="35%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default Acompanhamento;