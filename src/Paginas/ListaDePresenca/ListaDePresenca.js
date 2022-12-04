import './ListaDePresenca.css';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import Header from '../Template/components/Header/Header';
import ListaPresenca from '../Template/components/ListaPresenca/ListaPresenca';
import User from '../HomeResponsavel/components/Filter/imgs/tiorubens.jpg'
import ContaCondutor from '../Template/components/Account/ContaCondutor';
import Girlsit from '../Rotas/components/img/girlsit.png';

function ListaDePresenca() {

    return (
        <>
        <div className="homeR">
        {Sidebar().listaP()}
            <div>
                <Header srcUser={User} typeAccount={<ContaCondutor/>} cor="modal-user yellow" />
                <div style={{ display: "flex" }}>
                <ListaPresenca/>
                </div>
            </div>
            <ChatOverlay color="var(--amarelo-fraco-vanlus)"/>
        </div>
        <img alt="sidebar-img" src={Girlsit} height="45%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-3"}}/>
        </>
        

    )
}

export default ListaDePresenca;