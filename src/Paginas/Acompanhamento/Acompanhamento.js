import './Acompanhamento.css';
import BoyLook from './img/boylooking.png'
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Map from './components/Mapa/Mapa';
import Header from '../Template/components/Header/Header';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';

function Acompanhamento() {

    return (
        <>
        <div className="homeR">
        {Sidebar().acompanhamento_responsavel()}
            <div>
                <Header cor="modal-user blue" />
                <div style={{ display: "flex" }}>
                <Map/>
                </div>
            </div>
            <ChatOverlay/>
        </div>
        <img alt="sidebar-img" src={BoyLook} height="35%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default Acompanhamento;