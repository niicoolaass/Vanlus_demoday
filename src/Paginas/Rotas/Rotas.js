import './Rotas.css';
import GirlSit from './components/img/girlsit.png';
import Sidebar from '../Template/components/Sidebar/Sidebar';

import Header from '../Template/components/Header/Header';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import Trafego from './components/trajeto';
import User from '../HomeResponsavel/components/Filter/imgs/tiorubens.jpg'
import ContaCondutor from '../Template/components/Account/ContaCondutor';

function Rotas() {

    return (
        <>
        <div className="homeR">
        {Sidebar().rotaCondutor()}
            <div>
                <Header srcUser={User} typeAccount={<ContaCondutor/>} cor="modal-user yellow" />
                <div style={{ display: "flex" }}>
                <Trafego/>
                </div>
            </div>
            <ChatOverlay color="var(--amarelo-fraco-vanlus)"/>
        </div>
        <img alt="sidebar-img" src={GirlSit} height="35%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default Rotas;