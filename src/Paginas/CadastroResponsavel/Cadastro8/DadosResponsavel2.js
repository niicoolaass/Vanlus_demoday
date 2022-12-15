import Logo from '../../../styles/imgs/Logo 3.png'
import './DadosResponsavel2.css'
import Crianca from './imgs/crianca.png'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export function DadosResponsavel2 () {

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const onSubmit = (e) => {
      console.log(e);
    }
  
    const checkCEP = (e) => {
    if (!e.target.value) return; 
      const cep = e.target.value.replace(/\D/g, '');
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        setValue('address', data.logradouro);
        setFocus('addressNumber');
      });
    }
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
                            
                            <form onSubmit={handleSubmit(onSubmit)} id='cadastro-condutor2'>
                            <div className='h2-cadastro'>
                                <h2>Informações Pessoais</h2>
                            </div>

                                <input type="text" name="cpf"
                                  placeholder= '*CPF'
                                  pattern="\d{3}\.\d{3}\.-\d{2}"/>
                                <input type="text" name="Nome Completo" placeholder= "*RG"/>
                                <input type="text" {...register("cep")} onBlur={checkCEP} name="cep" placeholder= "*CEP"/>
                                <input type="text" {...register("address" )} name="endereço" placeholder= "*Endereço"/>                                
                                <input type="tel" name="Celular" placeholder= "*Celular"/>
                                    <div className='proximo'>
                                    <Link to='/cadastro9'><BsFillArrowRightCircleFill size={65} id='next2' /></Link>
                                    </div>
                            </form>
                            
                            <div className='linha-progressao2'>
                                <div id='progressao2-r'></div>
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

export default DadosResponsavel2;