import './Template.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ChatOverlay from './components/Chat_Overlay/ChatOverlay';

function Template(props) {

    return (
        <div className="homeR">
            {props.sidebar}
            <div>
                <Header cor={props.cor} />
                <div style={{ display: "flex" }}>
                    {props.element}
                </div>
            </div>
            <ChatOverlay/>
        </div>
    )

}

export default Template;