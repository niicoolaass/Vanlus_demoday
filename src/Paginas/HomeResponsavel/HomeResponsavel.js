import './HomeResponsavel.css';
import Template from '../Template/Template';
import Filter from './components/Filter/Filter';
import  Boy from './img/boy.jpg'


function HomeResponsavel() {

    return (
        <>
        <Template cor="modal-user blue" element={<Filter/>}/>
        <img alt="sidebar-img" src={Boy} height="45%" style={{position:"absolute", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default HomeResponsavel;