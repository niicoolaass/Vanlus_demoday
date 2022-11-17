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

                        <h2>Nós transformamos a vida de familias brasileiras com um transporte de qualidade e segurança.</h2>


                    </div>

                </div>

                <motion.div animate={{ x: 100}} className='SegundoConteudo'>

                    <img src={Vanescolar} alt='TransporteEscolar'/>

                </motion.div>
        
        
            </div>
        
        </>

    )
}