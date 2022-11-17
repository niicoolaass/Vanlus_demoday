import Logo from '../../../styles/imgs/Logo 3.png'
import './DadosResponsavel6.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import concluido from './imgs/concluido.png'

export function DadosResponsavel2 () {
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
                            
                            <form id='cadastro-condutor3'>
                            <div className='h2-cadastro'>
                                <h2>CADASTRO EFETUADO</h2>
                                <h3>Em breve você receberá um email de confirmação.</h3>
                            </div>

                            <img className='cadastro-logo' src={concluido} alt="Vanlus"/>                       
                                
                                <div className='proximo'>
                                <button id='Login2'><Link to='/Login'><b>LOGIN</b></Link></button> 
                                </div>
                            </form>
                    </div>                                               
                </motion.div>
            </div>
        </>

    )


}

export default DadosResponsavel2;