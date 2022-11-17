import Logo from '../../../styles/imgs/Logo 3.png'
import foto from './imgs/foto.png'
import './DadosResponsavel4.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosResponsavel1 () {
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
                            
                            <form id='cadastro-condutor1'>
                            <div className='h2-cadastro'>
                                <h2>Foto de perfil</h2>
                            </div>

                            <img className='cadastro-foto' src={foto} alt="foto"/>                       
                            
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

export default DadosResponsavel1;