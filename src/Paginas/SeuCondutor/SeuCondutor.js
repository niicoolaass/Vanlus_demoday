import './SeuCondutor.css';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import GirlSleep from './img/girlsleep.png';
import GirlRead from './img/girlread.png'
import ContaSeuCondutor from '../Template/components/Account/ContaSeuCondutor';
import ChatOverlay from '../Template/components/Chat_Overlay/ChatOverlay';
import Header from '../Template/components/Header/Header';


function SeuCondutor() {

    return (
        <>
        <div className="homeR">
        {Sidebar().seuCondutor()}
            <div>
                <Header cor="modal-user blue" />
                <div style={{ display: "flex" }}>
                <ContaSeuCondutor/>
                </div>
            </div>
            <ChatOverlay/>
        </div>
        <img alt="sidebar-img" src={GirlSleep} height="40%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>

        </>
    )
}

export default SeuCondutor;