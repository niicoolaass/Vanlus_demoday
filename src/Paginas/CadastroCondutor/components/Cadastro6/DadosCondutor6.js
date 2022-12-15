import Logo from '../../../../styles/imgs/Logo 3.png'
import './DadosCondutor.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function DadosCondutor6 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco'></div>

                <motion.div animate={{x: 30}} className="LadoEsquerdo">

                    <div className="containerEsquerdo6">
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
                                    <Link to='/cadastro6'><FaCheckCircle size={120} id='next3' /></Link>
                                </div>
                                <section id='botao-login'>                                   
                                    <label className='capa-login'>
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

export default DadosCondutor6;