// criação da estrutura do componente second-content 'O que ofereceomos?'
import './SecondContent.css'
import ImagemMoedinha from './imgs/moeda.png';
import ImagemVan from './imgs/van.png';
import ImagemWorld from './imgs/world.png';

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
                        <img alt="função" style={{borderRadius:"30px", marginTop:"30px"}} width="100%"  src={ImagemWorld}/>
                        </div>

                        <h1>Geolocalizção</h1>

                        <p>Usando tecnologias de localização, você poderá saber, em tempo real, onde seu filho está.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        <img width="150px" height="150px" src={ImagemMoedinha}/>
                        </div>

                        <h1>Preço Justo</h1>

                        <p>Negociar o melhor preço para você com seu condutor é uma possbilidade dentro da Vanlus.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        <img alt="função" style={{borderRadius:"30px"}} width="100%" height="100%" src={ImagemVan}/>
                        </div>

                        <h1>Condutores qualificados</h1>

                        <p>Encontre os melhores condutores perto da sua casa e os mais qualificados do mercado.</p>

                    </div>

                </div>
        
            </div>
        </>

    )
}

