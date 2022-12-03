import Logo from '../../../styles/imgs/Logo 3.png'
import './DadosResponsavel3.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export function DadosResponsavel3 () {
    return (

        <>
            <div id='container-geral'>
                 <div className="imagem-fundo">

                    <img src={Crianca} alt='Criança Feliz'/>

                </div>
                <div className='espaco2'></div>
                <motion.div animate={{ x: 30}} className="LadoEsquerdo2-r">
                
                <div className='c9'>
                    <div className="containerEsquerdo">
                        <img className='cadastro-logo' src={Logo} alt="Vanlus"/>                       
                            
                            <form id='cadastro-condutor2'>
                            <div className='h2-cadastro'>
                                <h2>Passageiro(a)</h2>
                            </div>

                                <input type="text" name="cpf"
                                  placeholder= '*CPF'
                                  pattern="\d{3}\.\d{3}\.-\d{2}"/>
                                <input type="text" name="Nome Completo" placeholder= "*RG"/>
                                <input type="text" name="cep" placeholder= "*Nome do filho(a)"/>
                                <input type="text" name="endereço" placeholder= "*Escola"/> 
                                <input type="time" name="hora" placeholder= "*Horário"/>

                                <div className='opcoes'>
                                    <div className='idavolta'>
                                        <label className='radio1'>
                                        <input type="radio" name='idavolta'/> 
                                        </label>
                                        <p>Ida e volta</p> 
                                    </div>

                                    <div className='ida'>
                                        <label className='radio2'>
                                        <input type="radio" name='ida'/>
                                        </label>
                                        <p>Somente ida</p>
                                    </div>

                                    <div className='volta'>
                                        <label className='radio3'>
                                        <input type="radio" name='volta'/>
                                        </label>
                                        <p>Somente volta</p>
                                    </div>
                                </div>

                                <div className='h3-cadastro'>
                                <h3>Informações adicionais</h3>
                                </div>

                                <div className='p-cadastro'>
                                <p>O(a) passeiro(a) possui necessidades especiais?<br></br> se sim, qual(quais)?</p>
                                </div>

                                <input type="text" className='necessidades' placeholder= "*"/>

                                    <div className='proximo'>
                                    <Link to='/cadastro10'><BsFillArrowRightCircleFill size={65} id='next2' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao2'>
                                <div id='progressao3-r'></div>
                                  <div className='nivel'><small></small></div>
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div> 
                                  <div className='nivel'><small></small></div>
                            </div>

                    </div>     
                    </div>                                          
                </motion.div>
            </div>
        </>

    )


}

export default DadosResponsavel3;