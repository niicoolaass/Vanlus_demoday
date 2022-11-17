import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor2.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosCondutor2 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco2'></div>
                <motion.div animate={{ x: 30}} className="LadoEsquerdo2">

                    <div className="containerEsquerdo">
                        <img className='cadastro-logo' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor2'>
                            <div className='h2-cadastro'>
                                <h2>Informações Pessoais</h2>
                            </div>

                                <input type="text" name="cpf"
                                  placeholder= '*CPF'
                                  pattern= "\d{3}\.\d{3}\.-\d{2}"/>
                                <input type="text" name="Nome Completo" placeholder= "*RG"/>
                                <input type="text" name="endereço" placeholder= "*Endereço"/>                                
                                <input type="text" name="cep" placeholder= "*CEP"/>
                                <input type="tel" name="Celular" placeholder= "*Celular"/>
                                    <div className='proximo'>
                                    <Link to='/cadastro3'><BsFillArrowRightCircleFill size={65} id='next1' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao2'>
                                <div id='progressao2'></div>
                                  <div className='nivel'><small></small></div>
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div>
                            </div>

                    </div>                                               
                </motion.div>
            </div>
        </>

    )


}

export default DadosCondutor2;