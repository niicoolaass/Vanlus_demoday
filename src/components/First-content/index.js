// criação da estrutura do componente first-content
import Vanescolar from './imgs/vanescolar.png'

import './style.css'

export function PrimeiroConteudo () {
    return (

        <>
            <div className='ConteudoPrincipal'>

                <div className='PrimeiroConteudo'>

                    <div>

                        <h1>Segurança no trajeto</h1>

                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</h2>
                        
                        <button>CADASTRAR</button>

                        <button>LOGIN</button>



                    </div>

                </div>

                <div className='SegundoConteudo'>

                    <img src={Vanescolar} alt='TransporteEscolar'/>

                </div>
        
        
            </div>
        
        </>

    )
}