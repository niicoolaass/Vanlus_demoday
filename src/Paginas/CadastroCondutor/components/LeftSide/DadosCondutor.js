import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export function DadosCondutor () {
    return (

        <>
            <section>
                
                <div id="LadoEsquerdo">

                    <div className="containerEsquerdo">

                        <div className='cabeçalho'>

                            <img src={Logo} alt="Vanlus"/>

                        </div>

                        <div className='DadosBasicos'>

                            <h2>Cadastre-se</h2>

                            <input type="email" name="email" placeholder= '*Informe um email'/>

                            <input type="text" name="Nome Completo" placeholder= "*Informe seu nome completo"/>

                            <input type="password" name="senha" placeholder= "*Informe uma senha"/> 

                        </div>

                        <div className='progressao'>

                            <div className='enviar'><BsFillArrowRightCircleFill size={65} /></div>

                        </div>


                    </div>



                </div>
        
            </section>
        </>

    )
}