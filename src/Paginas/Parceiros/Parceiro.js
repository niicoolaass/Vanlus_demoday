import './Parceiro.css';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Discount from './components/Discount';
import BoySoccer from './img/boysoccer.png'
import Header from '../Template/components/Header/Header';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';

function Parceiro() {

    return (
        <>
        <div className="homeR">
        {Sidebar().parceria()}
            <div>
                <Header cor="modal-user blue" />
                <div style={{ display: "flex" }}>
                <Discount/>
                </div>
            </div>
            <ChatOverlay/>
        </div>
        <img alt="sidebar-img" src={BoySoccer} height="40%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-3"}}/>
        </>
        

    )
}

export default Parceiro;