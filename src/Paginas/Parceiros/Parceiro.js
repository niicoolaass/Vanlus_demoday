import './Parceiro.css';
import Template from '../Template/Template';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import Discount from './components/Discount';
import BoySoccer from './img/boysoccer.png'

function Parceiro() {

    return (
        <>
        <Template sidebar={Sidebar().parceria()} cor="modal-user blue" element={<Discount/>}/>
        <img alt="sidebar-img" src={BoySoccer} height="40%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default Parceiro;