import './Acompanhamento.css';
import Template from '../Template/Template';
import BoyLook from './img/boylooking.png'
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Map from './components/Mapa/Mapa';

function Acompanhamento() {

    return (
        <>
        <Template sidebar={Sidebar().acompanhamento_responsavel()} cor="modal-user blue" element={<Map/>}/>
        <img alt="sidebar-img" src={BoyLook} height="35%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default Acompanhamento;