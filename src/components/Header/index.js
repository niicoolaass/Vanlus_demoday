// criação da estrutura do componente header

import './style.css'

import LogoVanlus from './imgs/LogoVanlus.jpeg'

export function Header () {
    return(

        <>

        <div className='header'>
        
            <div className="logo">

            <img src={LogoVanlus} alt="Vanlus"/>

            </div>


            <div className='menu'>

            <p>INÍCIO</p>
            <p>SOBRE NÓS</p>
            <p>FUNCIONALIDADES</p>
            <p>CONTATO</p>

            </div>

        </div>
        
        
        
        
        
        </>

    )
}