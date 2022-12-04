import './ModalUser.css';
import { BsGearFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalSuporte from '../ModalSuporte/ModalSuporte';
import Payment from '../Payment/Payment';


function ModalUser(props) {
    const [accountVisible, setAccountVisible] = useState(false);
    const [paymentPage, setPaymentPage]=useState(false);
    const [supportVisible, setSupportVisible]=useState(false);
    return (
        <>

            <div className={props.cor}>
                <img width="90px" height="90px" style={{ borderRadius: "50%", margin: "5px" }} src={props.srcUser} alt="userPhoto" />
                <span>{props.userNome}</span>
                <div>
                    <BsGearFill /><span onClick={() => { setAccountVisible(true) }}>Configuração da conta</span>
                </div>
                <div>
                    <FaWallet />
                    {props.cor==="modal-user blue"?
                    <Link to="/aa"> <span>Pagamento</span></Link>
                :<span onClick={()=>{setPaymentPage(true)}}>Pagamento</span>}
                   
                </div>
                <div>
                    <BsFillQuestionCircleFill /><span onClick={() => { setSupportVisible(true) }}>Suporte</span>
                </div>
                <Link to="/Login"><button>Sair</button></Link>
            </div>
            {accountVisible ?
                (<> <div onClick={() => { setAccountVisible(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "102" }}></div>
                    {props.typeAccount}</>) :
                null}
            {paymentPage?
            (<> <div onClick={() => { setPaymentPage(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "102" }}></div>
            <Payment/></>) :
        null}
             {supportVisible ?
                (<> <div onClick={() => { setSupportVisible(false) }} style={{ left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "102" }}></div>
                    <ModalSuporte cor={props.cor}/></>) :
                null}
        </>

    )
}

export default ModalUser;