import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FiCamera } from 'react-icons/fi'
import { motion } from 'framer-motion'

export function DadosCondutor3 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco'></div>

                <motion.div animate={{ x: 30}} className="LadoEsquerdo3">

                    <div className="containerEsquerdo3">
                        <img className='cadastro-logo3' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor3'>
                                <div className='h2-cadastro'>
                                    <h2>Foto de Perfil</h2>
                                </div>
                                <label id='avatarc-fake'>
                                    <FiCamera size={160} className='cam'/>
                                    <input type="file" id="avatarc" name="avatar" accept="image/png, image/jpeg"/>
                                </label>
                                    <div className='proximo'>
                                    <Link to='/cadastro4'><BsFillArrowRightCircleFill size={65} id='next1' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao3'>
                                <motion.div animate={{ x: 0}} id='progressao3'></motion.div>
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