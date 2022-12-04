import '../ModalUser/ModalUser.css';
import { BsTelephoneFill, BsExclamationTriangleFill, BsFileEarmarkText } from "react-icons/bs";


function ModalSuporte(props) {
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
                    <BsFileEarmarkText size={25}/><span>Termos de compromisso</span>
                </div>
            </div>
        </>

    )
}

export default ModalSuporte;