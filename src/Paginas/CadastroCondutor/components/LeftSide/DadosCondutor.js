import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export function DadosCondutor1 () {
    return (

        <>
                
                <div className="LadoEsquerdo">

                    <div className="containerEsquerdo">

                        <div className='cabeçalho'>

                            <img src={Logo} alt="Vanlus"/>

                        </div>

                        <h2>Cadastre-se</h2>

                        <div className='DadosBasicos'>
            
                            <form id='cadastro-condutor1'>

                                <input type="email" name="email" placeholder= '*Informe um email'/>

                                <input type="text" name="Nome Completo" placeholder= "*Seu nome completo"/>

                                <input type="password" name="senha" placeholder= "*Informe uma senha"/> 

                            </form>

                        </div>

                        <div className='progressao'>

                            <div className='enviar'><BsFillArrowRightCircleFill size={65} /></div>

                        </div>


                    </div>

                </div>
        </>

    )
}