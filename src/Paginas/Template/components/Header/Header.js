import './Header.css';
import { HiBell } from "react-icons/hi";
import { useState } from 'react';

function Header() {
    const [notVisible, setNotVisible] = useState(false);

    return (
        <div className="headerR">
            <HiBell onClick={() => { setNotVisible(!notVisible) }} color="var(--azul-vanlus)" style={{cursor:"pointer", marginRight: "10px" }} size="40" />
            <div style={{ width: "55px", height: "55px", borderRadius: "50%", backgroundColor: "black" }}></div>
            {notVisible
                ? (
                            <div style={{top:"0",left:"0", width:"100vw", heigth:"100vh", backgroundColor:"rgba(0, 0, 0, 0.082)",position:"absolute", color:"red"}}>
                                    <div onClick={() => setNotVisible(false)} class="notifications">skdkçal</div>
                            </div>
                )
                : null}
        </div>
    )
}

export default Header;