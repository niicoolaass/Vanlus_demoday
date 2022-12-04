import Sidebar from '../Template/components/Sidebar/Sidebar';
import Header from '../Template/components/Header/Header';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import User from '../HomeResponsavel/components/Filter/imgs/tiorubens.jpg'
import ContaCondutor from '../Template/components/Account/ContaCondutor';
import Girlsit from '../Rotas/components/img/girlsit.png';

function RendaExtra() {

    return (
        <>
        <div className="homeR">
        {Sidebar().rendaExtra()}
            <div>
                <Header srcUser={User} typeAccount={<ContaCondutor/>} cor="modal-user yellow"  />
                <div style={{ display: "flex" }}>
                </div>
            </div>
            <ChatOverlay color="var(--amarelo-fraco-vanlus)"/>
        </div>
        <img alt="sidebar-img" src={Girlsit} height="40%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-3"}}/>
        </>
        

    )
}

export default RendaExtra;