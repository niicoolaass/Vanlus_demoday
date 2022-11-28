import './SeuCondutor.css';
import Template from '../Template/Template';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import  Boy from '../HomeResponsavel/img/boy.jpg';
import ContaSeuCondutor from '../Template/components/Account/ContaSeuCondutor';


function SeuCondutor() {

    return (
        <>
        <Template sidebar={Sidebar().seuCondutor()} cor="modal-user blue" element={<ContaSeuCondutor/>}/>
        <img alt="sidebar-img" src={Boy} height="45%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default SeuCondutor;