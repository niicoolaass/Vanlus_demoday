import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosCondutor3 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco'></div>

                <motion.div animate={{ x: 30}} className="LadoEsquerdo">

                    <div className="containerEsquerdo">
                        <img className='cadastro-logo' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor1'>
                            <div className='h2-cadastro'>
                                <h2>Cadastre-se</h2>
                            </div>

                                <input type="email" name="email" placeholder= '*Informe um email'/>
                                <input type="text" name="Nome Completo" placeholder= "*Seu nome completo"/>
                                <input type="password" name="senha" placeholder= "*Crie uma senha"/>                                
                                <input type="password" name="senha" placeholder= "*Confirme sua senha"/>
                                    <div className='proximo'>
                                    <Link to='/cadastro4'><BsFillArrowRightCircleFill size={65} id='next1' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao3'>
                                <motion.div animate={{ x: 5}} id='progressao3'></motion.div>
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

export default DadosCondutor3;