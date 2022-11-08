// criação da estrutura do componente header

import './Header.css'

import LogoVanlus from './imgs/Logo_2.png'

export function Header () {
    return(

        <>

        <div className='header'>
        
            <div className="logo">

            <img src={LogoVanlus} alt="Vanlus"/>

            </div>


            <div className='menu'>

            <p><b>INÍCIO</b></p>
            <p><b>SOBRE NÓS</b></p>
            <p><b>FUNCIONALIDADES</b></p>
            <p><b>CONTATO</b></p>

            </div>

        </div>
        
        
        
        
        
        </>

    )
}