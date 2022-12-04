import Logo from '../../../styles/imgs/Logo 3.png'
import './DadosResponsavel4.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FiCamera } from 'react-icons/fi'

export function DadosResponsavel4 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco'></div>

                <div className="LadoEsquerdo-r">

                    <div className="containerEsquerdo-r">
                        <img className='cadastro-logo' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor3'>
                            <div className='h2-cadastro'>
                                <h2>Foto de perfil</h2>
                            </div>

                            <label id='avatarc-fake'>
                                    <FiCamera size={160} className='cam'/>
                                    <input type="file" id="avatarc" name="avatar" accept="image/png, image/jpeg"/>
                                </label>

                            <div className='proximo'>
                            <Link to='/cadastro11'><BsFillArrowRightCircleFill size={65} id='next2' /></Link>
                            </div>
                            </form>
                            
                            <div className='linha-progressao'>
                                <motion.div animate={{ x: 0}} id='progressao4-r'></motion.div>
                                  <div className='nivel'><small></small></div>
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div>
                            </div>
                        </div>                           
                    </div>
                </div>
        </>

    )



}

export default DadosResponsavel4;