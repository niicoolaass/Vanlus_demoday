import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosCondutor5 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco'></div>

                <motion.div animate={{ x: 30}} className="LadoEsquerdo5">

                    <div className="containerEsquerdo5">
                        <img className='cadastro-logo5' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor5'>
                            <div className='h2-cadastro5'>
                                <h2>Região</h2>
                            </div>
                                <input type="text" name="escola" placeholder= '*Escola'/>
                                <input type="time" name="hora" placeholder= "*Horário"/>
                            <section>
                                <input type="text" name="escola" placeholder= '*Escola'/>
                                <input type="time" name="hora" placeholder= "*Horário"/>
                            </section>
                                <div className='proximo5'>
                                    <Link to='/cadastro6'><BsFillArrowRightCircleFill size={65} id='next1' /></Link>
                                </div>
                            </form>
                            
                            <div className='linha-progressao5'>
                                <div id='progressao5'></div>
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

export default DadosCondutor5;