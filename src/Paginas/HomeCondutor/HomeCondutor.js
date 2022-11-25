import './HomeCondutor.css';
import Template from '../Template/Template';
import BoySearch from './img/boysearch.png'
import Clients from './components/clients';


function HomeCondutor() {

    return (
        <>
        <Template cor="modal-user blue" element={<Clients/>}/>
        <img alt="sidebar-img" src={BoySearch} height="45%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default HomeCondutor;