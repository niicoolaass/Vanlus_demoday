import './Login.css'
import icon from '../../styles/imgs/Logo 3.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


function Login () {
    return (
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
                    <a href='/#'>Esqueceu a senha?</a>
                </div>

                <section className='enviar'>
                    <BsFillArrowRightCircleFill size={65}/>
                </section>                
            </form>

            </div>
        </div>
    );
}

export default Login;
