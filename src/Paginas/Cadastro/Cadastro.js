import './Cadastro.css'
import Logo from '../../styles/imgs/Logo 3.png'
import CadastroPais from './imgs/CadastroPais.png'
import CadastroCondutor from './imgs/CadastroPais.png'
import { Link } from 'react-router-dom'

export function Cadastro () {
    return(
        <>
        
            <section id='containerCadastro'>

                    <Link to='/'><img id='logo' src={Logo} alt='Vanlus'/></Link>
                
                <div id='left'>
                    
                    <div className='left'> 

                        <Link to="/"><img id='CadastroPais' src={CadastroPais} alt='Cadastro Pais' /> </Link>
                    
                    </div>

                </div>



                <div id='right'>

                    <div className='right'> 

                        <Link to='/Cadastro/Condutor/1'><img id='CadastroCondutor' src={CadastroCondutor} alt='Cadastro Condutor' />  </Link>

                    </div>

                </div>



            </section>
        
        
        
        
        
        </>

    )
}