// criação da estrutura do componente header

import './Header.css'
import { Link } from 'react-router-dom'

import LogoVanlus from './imgs/Logo_2.png'

export function Header () {


    return(

        <>

        <div id="header" className='header'>
        
            <div className="logo">

            <img src={LogoVanlus} alt="Vanlus"/>

            </div>


            <div className='menu'>

            <p><b><a href="#top">INÍCIO</a></b></p>
            <p><b><a href='#sobreNos'>SOBRE NÓS</a></b></p>
            <p><b><a href="#SegundoConteudo">FUNCIONALIDADES</a></b></p>
            <p><b><a href="#footer">CONTATO</a></b></p>
            <button id='Login'><Link to='/Login'><b>LOGIN</b></Link></button> 
            <button id='Cadastrar'><Link to='/Cadastro'><b>CADASTRE-SE</b></Link></button>

            </div>

        </div>
        
        
        
        
        
        </>

    )
}