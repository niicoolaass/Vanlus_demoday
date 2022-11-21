import './Header.css';
import { HiBell } from "react-icons/hi";
import { useState } from 'react';
import Notifications from '../Notifications/Notifications';
import User from './img/adriana.jpg';
import ModalUser from '../ModalUser/ModalUser';

function Header(props) {
    const [notVisible, setNotVisible] = useState(false);
    const [accountVisible, setAccountVisible] = useState(false);

    return (
        <div className="headerR">
            <HiBell onClick={() => { setNotVisible(!notVisible)
            setAccountVisible(false) }} color="var(--azul-vanlus)" style={{ cursor: "pointer", marginRight: "10px" }} size="35" />
            <img onClick={() => { setAccountVisible(!accountVisible) 
                setNotVisible(false) }} src={User} alt="user" width="55px" height="55px" style={{ cursor: "pointer", borderRadius: "50%", backgroundColor: "black" }} />
            {notVisible
                ? (
                    <>
                    <div onClick={()=>{setNotVisible(false) }} style={{left:"0",width:"100vw", height:"190vh", position:"absolute", zIndex:"99"}}></div>
                    <Notifications />
                    </>
                )
                : null}
            {accountVisible
                ? (
                    <>
                    <div onClick={()=>{setAccountVisible(false) }} style={{left:"0",width:"100vw", height:"190vh", position:"absolute", zIndex:"99"}}></div>
                    <ModalUser cor={props.cor} userNome="Adriana" />
                    </>
                    
                )
                : null
            }
        </div>
    )
}

export default Header;