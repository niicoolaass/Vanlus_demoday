// criação da estrutura do componente first-content
import Vanescolar from './imgs/Bus.png'
import './FirstContent.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'




export function PrimeiroConteudo () {
    return (

        <>
            <div className='ConteudoPrincipal'>

                <div className='PrimeiroConteudo'>

                    <div>

                        <h1>Segurança no trajeto</h1>

                        <h2>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</h2>
                        
                    <div className='botoes'>

                        <button id='Login'><Link to='/Login'><b>LOGIN</b></Link></button> 

                        <button id='Cadastrar'><Link to='/Cadastro'><b>CADASTRE-SE</b></Link></button>

                    </div>


                    </div>

                </div>

                <motion.div animate={{ x: 100}} className='SegundoConteudo'>

                    <img src={Vanescolar} alt='TransporteEscolar'/>

                </motion.div>
        
        
            </div>
        
        </>

    )
}