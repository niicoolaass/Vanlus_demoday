// criação da estrutura do componente first-content
import Vanescolar from './imgs/Bus.png'
import './FirstContent.css'
import { motion } from 'framer-motion'





export function PrimeiroConteudo () {
    return (

        <>
            <div className='ConteudoPrincipal'>

                <div className='PrimeiroConteudo'>

                    <div>

                        <h1>Segurança no trajeto</h1>

                        <h2>Nós transformamos a vida de familias brasileiras com um transporte de qualidade e segurança.</h2>
<<<<<<< HEAD
=======
                        
                    <div className='botoes'>

                        <button id='Login'><Link to='/Login'><b>LOGIN</b></Link></button> 

                        <button id='Cadastrar'><Link to='/Cadastro'><b>CADASTRE-SE</b></Link></button>

                    </div>
>>>>>>> 772c28124e28e691f995700ec712655c7916c72f


                    </div>

                </div>

                <motion.div animate={{ x: 100}} className='SegundoConteudo'>

                    <img src={Vanescolar} alt='TransporteEscolar'/>

                </motion.div>
        
        
            </div>
        
        </>

    )
}