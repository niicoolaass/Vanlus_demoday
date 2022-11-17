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

<<<<<<< HEAD
                        <Link to="/"><img id='CadastroPais' src={CadastroPais} alt='Cadastro Pais' /> </Link>
=======
                        <Link to='/CadastroResponsavel'><img id='CadastroPais' src={CadastroPais} alt='Cadastro Pais' /></Link>
>>>>>>> 772c28124e28e691f995700ec712655c7916c72f
                    
                    </div>

                </div>

                <div id='right'>

                    <div className='right'> 

<<<<<<< HEAD
                        <Link to='/Cadastro/Condutor/1'><img id='CadastroCondutor' src={CadastroCondutor} alt='Cadastro Condutor' />  </Link>
=======
                        <Link to='/CadastroCondutor'><img id='CadastroCondutor' src={CadastroCondutor} alt='Cadastro Condutor' /></Link>
>>>>>>> 772c28124e28e691f995700ec712655c7916c72f

                    </div>

                </div>



            </section>
        
        
        
        
        
        </>

    )
}