// criação da estrutura do componente second-content 'O que ofereceomos?'
import './SecondContent.css'
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
                        Geolocalização
                        </div>

                        <h1>Geolocalização</h1>

                        <p>Usando tecnologias de localização, você poderá saber, em tempo real, onde seu filho está.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        função 2
                        </div>

                        <h1>Preço justo</h1>

                        <p>Negociar o melhor preço para você com seu condutor é uma possbilidade dentro da Vanlus.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        função 3
                        </div>

                        <h1>Condutores qualificados</h1>

                        <p>Encontre os melhores condutores perto da sua casa e os mais qualificados do mercado.</p>

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

