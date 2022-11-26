import './SeuCondutor.css';
import Template from '../Template/Template';
import Sidebar from '../Template/components/Sidebar/Sidebar';
import  Boy from '../HomeResponsavel/img/boy.jpg';
import Account from '../Template/components/Account/Account';


function SeuCondutor() {

    return (
        <>
        <Template sidebar={Sidebar().seuCondutor()} cor="modal-user blue" element={Account().accountSeuCondutor()}/>
        <img alt="sidebar-img" src={Boy} height="45%" style={{position:"fixed", bottom:"0", left:"0", zIndex:"-1"}}/>
        </>
        

    )
}

export default SeuCondutor;