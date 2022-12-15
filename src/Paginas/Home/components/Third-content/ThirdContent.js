// criação da estrutura do componente second-content 'O que ofereceomos?'
import './ThirdContent.css'
import Engrenagem from './imgs/gears.png';
import ImagemLocal from './imgs/local.png';
import ImagemList from './imgs/list.png';

export function TerceiroConteudo () {
    return(

        <>

            <div id='SegundoConteudo'>
        
                <div className='parteAmarela'>
                    <h2>Para os condutores:</h2>
                </div>

                <div id='container'>

                    <div>
                        <div className='funcionalidades'>
                       <img style={{marginTop:"40px"}} width="100%" src={Engrenagem} alt='engrenagem'/>
                        </div>

                        <h1> Mecânicos parceiros</h1>

                        <p>Todos nossos condutores recebem desconto em manunteção com nossos mecânicos parceiros.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        <img alt="função"  width="100%" src={ImagemList}/>
                        </div>

                        <h1>Lista de Presença</h1>

                        <p>Veja a lista de presença de seus clientes para um controle maior de pagamento e faltas.</p>

                    </div>

                    <div>
                        <div className='funcionalidades'>
                        <img alt="função" style={{borderRadius:"30px"}} width="100%" height="100%" src={ImagemLocal}/>
                        </div>

                        <h1>Rota</h1>

                        <p>Tenha acesso a melhor rota disponível para reduzir os gastos em gasolinas, otimizar seu tempo e muitos outros benefícios.</p>

                    </div>

                </div>
        
            </div>
        </>

    )
}

