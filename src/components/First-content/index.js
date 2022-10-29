// criação da estrutura do componente first-content
import Vanescolar from './imgs/Bus.png'

import './style.css'

export function PrimeiroConteudo () {
    return (

        <>
            <div className='ConteudoPrincipal'>

                <div className='PrimeiroConteudo'>

                    <div>

                        <h1>Segurança no trajeto</h1>

                        <h2>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</h2>
                        
                    <div className='butoes'>

                        <button id='Login'><b>LOGIN</b></button>

                        <button id='Cadastrar'><b>CADASTRE-SE</b></button>

                    </div>


                    </div>

                </div>

                <div className='SegundoConteudo'>

                    <img src={Vanescolar} alt='TransporteEscolar'/>

                </div>
        
        
            </div>
        
        </>

    )
}