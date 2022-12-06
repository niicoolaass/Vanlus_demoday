import './HomeCondutor.css';
import Clients from './components/clients';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Header from '../Template/components/Header/Header';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import ContaCondutor from '../Template/components/Account/ContaCondutor';
import User from '../HomeResponsavel/components/Filter/imgs/tiorubens.jpg';
import Girlsit from '../Rotas/components/img/girlsit.png';


function HomeCondutor() {

    return (
        <>
        <div className="homeR">
        {Sidebar().homeCondutor()}
            <div>
                <Header srcUser={User} typeAccount={<ContaCondutor/>} cor="modal-user yellow" />
                <div style={{ display: "flex" }}>
                <Clients/>
                </div>
            </div>
            <ChatOverlay color="var(--amarelo-fraco-vanlus)"/>
        </div>
        <img alt="sidebar-img" src={Girlsit} height="45%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-3"}}/>
        </>
        

    )
}

export default HomeCondutor;