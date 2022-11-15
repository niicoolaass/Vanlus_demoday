import './Cadastro.css'
import Logo from '../../styles/imgs/Logo 3.png'
import CadastroPais from './imgs/CadastroPais.png'
import CadastroCondutor from './imgs/CadastroCondutor.png'
import { Link } from 'react-router-dom'

export function Cadastro () {
    return(
        <>
        
            <section id='containerCadastro'>

                    <img id='logo' src={Logo} alt='Vanlus'/>
                
                <div id='left'>
                    
                    <div className='left'> 

                        <Link><img id='CadastroPais' src={CadastroPais} alt='Cadastro Pais' /> </Link>
                    
                    </div>

                </div>



                <div id='right'>

                    <div className='right'> 

                        <Link to='/CadastroCondutor'><img id='CadastroCondutor' src={CadastroCondutor} alt='Cadastro Condutor' />  </Link>

                    </div>

                </div>



            </section>
        
        
        
        
        
        </>

    )
}