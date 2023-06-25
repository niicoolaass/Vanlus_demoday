import './Sidebar.css';
import LogoMarca from '../../../../styles/imgs/Logo_2.png';
import { AiFillHome } from "react-icons/ai";
import { TbBus } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineMap } from "react-icons/hi";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { Link } from 'react-router-dom'

function Sidebar(){
    return{
        homeResponsavel(){
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li className='selected'>
                     <Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link> 
                </li>
                <li>
                     <Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link> 
                </li>
                <li>
                     <Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link> 
                </li>
                <li className='parceiros'>
                 <Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link> 
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
                        <Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link>
                    </li>
                    <li className='selected'>
                        <Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link>
                    </li>
                    <li>
                        <Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link>
                    </li>
                    <li className='parceiros'>
                        <Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link>
                    </li>
                </ul>
            </div>)
        },
        seuCondutor(){
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li >
                    <Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link>
                </li>
                <li>
                    <Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link>
                </li>
                <li className="selected">
                    <Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link>
                </li>
                <li className='parceiros'>
                <Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link>
                </li>
            </ul>
        </div>)
        },

        parceria() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul>
                <li >
                    <Link to='/responsavel/home'><AiFillHome size={35}/>HOME</Link>
                </li>
                <li>
                    <Link to='/responsavel/acompanhamento'><HiOutlineMap size={35}/>ACOMPANHAMENTO</Link>
                </li>
                <li>
                    <Link to='/responsavel/condutor'><TbBus size={35}/>SEU CONDUTOR</Link>
                </li>
                <li className='parceiros'>
                    <Link to='/responsavel/parceiro'><BsFillPeopleFill size={35}/>PARCEIROS</Link>
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
                     <Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link> 
                </li>
                <li>
                     <Link to='/condutor/rotas'><TbBus size={35}/>ROTAS</Link> 
                </li>
                <li>
                     <Link to='/condutor/listadepresenca'><MdOutlinePlaylistAddCheck size={35}/>LISTA DE PRESENÇA</Link> 
                </li>
                <li className='renda_extra' >
                    <Link to="/condutor/rendaextra" style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</Link>
                </li>
            </ul>
        </div>)
        },

       rotaCondutor() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul className='sidebar_conductor'>
                <li>
                     <Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link> 
                </li>
                <li  className='conductor_yellow'>
                     <Link to='/condutor/rotas'><TbBus size={35}/>ROTAS</Link> 
                </li>
                <li>
                     <Link to='/condutor/listadepresenca'><MdOutlinePlaylistAddCheck size={35}/>LISTA DE PRESENÇA</Link> 
                </li>
                <li className='renda_extra' >
                <Link to="/condutor/rendaextra" style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</Link>
                </li>
            </ul>
        </div>)
        },

        listaP() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul className='sidebar_conductor'>
                <li >
                     <Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link> 
                </li>
                <li>
                     <Link to='/condutor/rotas'><TbBus size={35}/>ROTAS</Link> 
                </li>
                <li className='conductor_yellow'>
                     <Link to='/condutor/listadepresenca'><MdOutlinePlaylistAddCheck size={35}/>LISTA DE PRESENÇA</Link> 
                </li>
                <li className='renda_extra' >
                <Link to="/condutor/rendaextra" style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</Link>
                </li>
            </ul>
        </div>)
        },
        rendaExtra() {
            return(<div className="sidebar">
            <img height="15%"  src={LogoMarca} alt="Logo"/>
            <ul className='sidebar_conductor'>
                <li >
                     <Link to='/condutor/home'><AiFillHome size={35}/>HOME</Link> 
                </li>
                <li>
                     <Link to='/condutor/rotas'><TbBus size={35}/>ROTAS</Link> 
                </li>
                <li>
                     <Link to='/condutor/listadepresenca'><MdOutlinePlaylistAddCheck size={35}/>LISTA DE PRESENÇA</Link> 
                </li>
                <li className='renda_extra' >
                <Link to="/condutor/rendaextra" style={{color:"var(--azul-claro-vanlus"}}><BsFillPeopleFill size={35}/>RENDA EXTRA?</Link>
                </li>
            </ul>
        </div>)
        }
        

        
    }
}

export default Sidebar;