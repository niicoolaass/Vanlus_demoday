import Logo from '../../../styles/imgs/Logo 3.png'
import './DadosResponsavel5.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function DadosResponsavel5 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco'></div>

                <motion.div animate={{x: 30}} className="LadoEsquerdo2-r">

                    <div className="containerEsquerdo">
                        <img className='cadastro-logo' src={Logo} alt="Vanlus"/>                       
                            
                            <div id='cadastro-condutor6'>
                                <div className='h2-cadastro6'>
                                    <h2>Cadastrado</h2>
                                </div>
                                <section className='termino'>
                                    <p>
                                    Bem-vindo(a) à Vanlus<br/>
                                    Em breve você receberá um email de confirmação
                                    </p>
                                </section>  
                                <div className='proximo6'>
                                    <FaCheckCircle size={120} className='next1' />
                                </div>
                                <section id='botao-login2'>                                   
                                    <label className='capa-login2'>
                                        <button><Link to='/Login'><p>LOGIN</p></Link></button>
                                    </label>                                       
                                </section>
                            </div>
                            
                            

                        </div>
                                                
                    </motion.div>
            </div>
        </>

    )


}

export default DadosResponsavel5;