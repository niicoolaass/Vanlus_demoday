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
                <li className='selected'>
                    <a><Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link></a>
                </li>
                <li>
                    <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                </li>
                <li className='parceiros'>
                <a><Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link></a>
                </li>
            </ul>
        </div>)
        },

        acompanhamento_responsavel() {
            return(
            <div className="sidebar">
                <img height="15%"  src={LogoMarca} alt="Logo"/>
                <ul>
                    <li>
                        <a><Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link></a>
                    </li>
                    <li className='selected'>
                        <a><Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link></a>
                    </li>
                    <li>
                        <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                    </li>
                    <li className='parceiros'>
                        <a><Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link></a>
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
                    <a><Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link></a>
                </li>
                <li className="selected">
                    <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                </li>
                <li className='parceiros'>
                <a><Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link></a>
                </li>
            </ul>
        </div>)
        },

        parceria() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li >
                    <a><Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link></a>
                </li>
                <li>
                    <a><Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link></a>
                </li>
                <li className='parceiros'>
                    <a><Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link></a>
                </li>
            </ul>
        </div>)
        },

/*Sidebar do Condutor*/
        
        homeCondutor() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul className='sidebar_conductor'>
                <li className='conductor_yellow'>
                    <a><Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><Link to='/condutor/rotas'><AiFillHome size={35}/>ROTAS</Link></a>
                </li>
                <li>
                    <a><Link to='/condutor/listadepresenca'><TbBus size={35}/>LISTA DE PRESENÇA</Link></a>
                </li>
                <li className='renda_extra'>
                    <a style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</a>
                </li>
            </ul>
        </div>)
        },

       rotaCondutor() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul className='sidebar_conductor'>
                <li>
                    <a><Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li  className='conductor_yellow'>
                    <a><Link to='/condutor/rotas'><AiFillHome size={35}/>ROTAS</Link></a>
                </li>
                <li>
                    <a><Link to='/condutor/listadepresenca'><TbBus size={35}/>LISTA DE PRESENÇA</Link></a>
                </li>
                <li className='renda_extra'>
                    <a style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</a>
                </li>
            </ul>
        </div>)
        },

        listaP() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul className='sidebar_conductor'>
                <li className='conductor_yellow'>
                    <a><Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link></a>
                </li>
                <li>
                    <a><Link to='/condutor/rotas'><AiFillHome size={35}/>ROTAS</Link></a>
                </li>
                <li>
                    <a><Link to='/condutor/listadepresenca'><TbBus size={35}/>LISTA DE PRESENÇA</Link></a>
                </li>
                <li className='renda_extra'>
                    <a style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</a>
                </li>
            </ul>
        </div>)
        }

        
    }
}

export default Sidebar;