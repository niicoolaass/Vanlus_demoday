// criação da estrutura do componente second-content 'O que ofereceomos?'
import './style.css'
import TioRubens from './imgs/TioRubens.jpeg'

export function SegundoConteudo () {
    return(

        <>

            <div id='SegundoConteudo'>
        
                <div className='parteAzul'>

                    <h1>O que oferecemos?</h1>
                    <h2>Para os responsáveis:</h2>

                </div>

                <div id='container'>

                    <div>
                        <div className='funcionalidades'>
                        função 1
                        </div>

                        <h1>Função</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut s </p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        função 2
                        </div>

                        <h1>Função</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut s </p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        função 3
                        </div>

                        <h1>Função</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut s </p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        função 4
                        </div>

                        <h1>Função</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut s </p>
                        
                    </div>

                </div>

                <div className='paraCondutor'>

                    <div id='tio'>

                        <img src={TioRubens} alt='Tio de Van Escolar'/>

                    </div>

                        <span> 
                        
                        <h1>Para os Condutores:</h1>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut s </p>
                        
                        </span>

                </div>  
        
            </div>
        </>

    )
}

