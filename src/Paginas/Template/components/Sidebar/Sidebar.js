import './Sidebar.css';
import LogoMarca from '../../../../styles/imgs/Logo_2.png';
import { AiFillHome } from "react-icons/ai";
import { TbBus } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineMap } from "react-icons/hi";
import { Link } from 'react-router-dom'

function Sidebar(){
    return{
        homeResponsavel(){
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li className="selected">
                    <a><Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><HiOutlineMap size={35}/>ACOMPANHAMENTO</a>
                </li>
                <li>
                    <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                </li>
                <li className='parceiros'>
                    <a><BsFillPeopleFill size={35}/>PARCEIROS</a>
                </li>
            </ul>
        </div>)
        },
        seuCondutor(){
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li >
                <a><Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><HiOutlineMap size={35}/>ACOMPANHAMENTO</a>
                </li>
                <li className="selected">
                <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                </li>
                <li className='parceiros'>
                    <a><BsFillPeopleFill size={35}/>PARCEIROS</a>
                </li>
            </ul>
        </div>)
        },
        
        homeCondutor() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li className="amarelo">
                    <a><Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><HiOutlineMap size={35}/>ACOMPANHAMENTO</a>
                </li>
                <li>
                    <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                </li>
                <li className='parceiros'>
                    <a><BsFillPeopleFill size={35}/>PARCEIROS</a>
                </li>
            </ul>
        </div>)
        }
    }
}

export default Sidebar;