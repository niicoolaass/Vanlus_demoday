import Logo from '../../../styles/imgs/Logo 3.png'
import './DadosResponsavel5.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosResponsavel5 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco2'></div>
                <motion.div animate={{ x: 30}} className="LadoEsquerdo2-r">

                    <div className="containerEsquerdo">
                        <img className='cadastro-logo' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor2'>
                            <div className='h2-cadastro'>
                                <h2>Forma de pagamento</h2>
                            </div>

                                <input type="text" name="cpf"
                                  placeholder= '*CVV'
                                  pattern="\d{3}\.\d{3}\.-\d{2}"/>
                                <input type="text" name="Nome Completo" placeholder= "*Data de validade"/>
                                <input type="text" name="endereço" placeholder= "*Número do cartão"/>                                
                                    <div className='proximo'>
                                    <Link to='/cadastro12'><BsFillArrowRightCircleFill size={65} id='next2' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao2'>
                                <div id='progressao5-r'></div>
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

export default DadosResponsavel5;