import './ModalUser.css';
import User from '../../../HomeResponsavel/img/boy.jpg';
import { BsGearFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Account from '../Account/Account';

function ModalUser(props) {
    const [accountVisible, setAccountVisible] = useState(false);
    return (
        <>

            <div className={props.cor}>
                <img width="90px" height="90px" style={{ borderRadius: "50%", margin: "5px" }} src={User} alt="userPhoto" />
                <span>{props.userNome}</span>
                <div>
                    <BsGearFill /><span onClick={() => { setAccountVisible(true) }}>Configuração da conta</span>
                </div>
                <div>
                    <FaWallet /><span>Pagamento</span>
                </div>
                <div>
                    <BsFillQuestionCircleFill /><span>Suporte</span>
                </div>
                <Link to="/Login"><button>Sair</button></Link>
            </div>
            {accountVisible ?
                (<> <div onClick={() => { setAccountVisible(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "99" }}></div>
                    {Account().accountResposavel()}</>) :
                null}
        </>

    )
}

export default ModalUser;