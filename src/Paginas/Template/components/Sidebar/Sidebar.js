import './Sidebar.css';
import LogoMarca from '../../../../styles/imgs/Logo_2.png';
import Boy from './img/boy.jpg';
import { AiFillHome } from "react-icons/ai";
import { TbBus } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineMap } from "react-icons/hi";

function Sidebar(){
    return(
        <div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li className="selected">
                    <a><AiFillHome size={35}/>HOME</a>
                </li>
                <li>
                    <a><HiOutlineMap size={35}/>ACOMPANHAMENTO</a>
                </li>
                <li>
                    <a><TbBus size={35}/>SEU CONDUTOR</a>
                </li>
                <li className='parceiros'>
                    <a><BsFillPeopleFill size={35}/>PARCEIROS</a>
                </li>
            </ul>
            <img src={Boy} height="45%" style={{position:"absolute", bottom:"0", left:"0", zIndex:"-1"}}/>
        </div>
    )
}

export default Sidebar;