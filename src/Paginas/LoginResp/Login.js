import './Login.css';
import icon from '../../styles/imgs/Logo 3.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


function Login () {
    return (
        <div className="Login">
            <div className='container'>
                <img className='login-logo' src={icon} alt='Vanlus'/>
            
            <div className='t-login'>
                <h1>LOGIN</h1>
            </div>
                
            <form>
                <label className='email'> 
                    {/* <AiOutlineMail />                    */}
                    <input type="email" name="email" placeholder= 'Email*'/>
                </label>

                <label className='senha'>
                    {/* <GiPadlock /> */}
                <input type="password" name="password" placeholder='Senha*' />
                </label>

                <div className='esqueceu-senha'>
                    <a href='/#'>Esqueceu a senha?</a>
                </div>

                <div className='enviar'>
                    <BsFillArrowRightCircleFill size={65}/>
                </div>                
            </form>

            </div>
        </div>
    );
}

export default Login;
