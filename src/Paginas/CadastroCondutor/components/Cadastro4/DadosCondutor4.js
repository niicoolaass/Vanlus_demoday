import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosCondutor4 () {
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
                                <h2>Veículo</h2>
                            </div>
                                <input type="text" name="NUmP" placeholder= '*Número da placa'/>
                                <input type="text" name="CNH" placeholder= "*CNH"/>
                                <input type="text" name="CRVL" placeholder= "*CRVL"/>                                
                                    <div className='proximo4'>
                                    <Link to='/cadastro5'><BsFillArrowRightCircleFill size={65} id='next1' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao4'>
                                <div id='progressao4'></div>
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

export default DadosCondutor4;