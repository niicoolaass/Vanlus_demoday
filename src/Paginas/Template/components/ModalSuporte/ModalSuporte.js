import '../ModalUser/ModalUser.css';
import { BsTelephoneFill, BsExclamationTriangleFill, BsFileEarmarkText } from "react-icons/bs";
import Privacidade from '../Informations/Privacidade';
import { useState } from 'react';


function ModalSuporte(props) {
    const [privacidade, setPrivacidade]=useState(false);
    return (
        <>

            <div className={props.cor} style={{zIndex:"103", justifyContent:"center"}}>
                <div>
                    <BsTelephoneFill size={25} /><span>Ligação para o suporte</span>
                </div>
                <div>
                    <BsExclamationTriangleFill size={25}/><span>Relatar um problema</span>
                </div>
                <div>
                    <BsFileEarmarkText size={25}/><span onClick={()=>{setPrivacidade(true)}}>Termos de compromisso</span>
                </div>
            </div>
            {privacidade?
        <>
        <div onClick={() => { setPrivacidade(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "10" }}></div>
        <Privacidade/>
        </>:
        null}
        </>

    )
}

export default ModalSuporte;