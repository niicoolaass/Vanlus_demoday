import './HomeResponsavel.css';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Filter from './components/Filter/Filter';
import  Boy from './img/boy.jpg'
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import Header from '../Template/components/Header/Header';
import ContaResponsavel from '../Template/components/Account/ContaReponsavel'
import User from '../Template/components/Header/img/adriana.jpg'

function HomeResponsavel() {

    return (
        <>
        <div className="homeR">
        {Sidebar().homeResponsavel()}
            <div>
                <Header  srcUser={User} typeAccount={<ContaResponsavel/>} cor="modal-user blue" />
                <div style={{ display: "flex" }}>
                <Filter/>
                </div>
            </div>
            <ChatOverlay color="var(--azul-vanlus)"/>
        </div>
        <img alt="sidebar-img" src={Boy} height="45%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default HomeResponsavel;