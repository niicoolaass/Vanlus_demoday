import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Crianca from './imgs/crianca.png'

export function DadosCondutor () {
    return (

        <>
            <section>    

                <div className="LadoEsquerdo">

                    <div className="containerEsquerdo">

                        <div className='cabeçalho'>

                            <img src={Logo} alt="Vanlus"/>

                        </div>

                        <h2>Cadastre-se</h2>

                        <div className='DadosBasicos'>
            
                            <form id='cadastro-condutor1'>

                                <input type="email" name="email" placeholder= '*Informe um email'

                                />

                                <input type="text" name="Nome Completo" placeholder= "*Seu nome completo"/>
                                <input type="password" name="senha" placeholder= "*Crie uma senha"/> 
                                
                                <input type="password" name="senha" placeholder= "*Confirme sua senha"/>

                                <section className='proximo'>

                                    <BsFillArrowRightCircleFill size={65} id='next1' />

                                </section>

                            </form>

                        </div>

                        <div className='progressao'>

                            <div className='enviar'><BsFillArrowRightCircleFill size={65} /></div>

                        </div>

                    </div>

                </div>

                <div className="img-fundo-cadastro-condutor">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>

            </section>
        </>

    )
}