import './Login.css'
import icon from '../../styles/imgs/Logo 3.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import pintada from './imgs/mao_pintada.png'
import { Link } from 'react-router-dom'


function Login () {
    return (
        <>
        <div className='imagem-fundo'>
                <img src= {pintada} alt="foto-fundo" />
        </div>

        <div id="container-login">
            <div className='container'>
                <img className='login-logo' src={icon} alt='Vanlus'/>
            
            <div className='t-login'>
                <h1>LOGIN</h1>
            </div>
                
            <form id='formulario-login'>
                <label className='email'> 
                    <input type="email" name="email" placeholder= 'Email*'/>
                </label>

                <label className='senha'>
                <input type="password" name="password" placeholder='Senha*' />
                </label>

                <div className='esqueceu-senha'>
                    <a href='/Login'>Esqueceu a senha?</a>
                </div>

                <section className='enviar'>
                  <Link to='/responsavel/home'><BsFillArrowRightCircleFill size={65}/></Link>  
                </section>                
            </form>

            </div>
        </div>
        </>
    )  
}
    
export default Login;
