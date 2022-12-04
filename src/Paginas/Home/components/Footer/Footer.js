import './Footer.css'
import Logo from './imgs/Logotipo.png'
import { SiLinkedin, SiInstagram,SiGithub, SiGmail } from "react-icons/si";

export function Footer () {
    return (
        <>
        
            <section id='footer'>


                <div className='footer'>

                    <img src={Logo} alt=''/>

                    <h2>Contato</h2>

                    <p>R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000</p>
                    <p>(11) 2888-5500</p>

                </div>


                <div id='links' className='footer'>

                    <h2>Links Rápidos</h2>

                    <p>Termos e Condições</p>

                    <p>Política de Privacidade</p>

                    <p>Política de Cookies</p>
                    
                </div>


                <div id='redesSociais' className='footer'>
                
                    <h2><a href="" target="_blank"><SiLinkedin size={40}/></a></h2>

                    <h2><a href="" target="_blank"><SiGmail size={40}/></a></h2>

                    <h2><a href="https://github.com/grupo18proa" target="_blank"><SiGithub size={40}/></a></h2>

                    <h2><a href="https://www.instagram.com/vanlus18/" target="_blank"><SiInstagram size={40}/></a></h2>
                    
                </div>




            </section>
        
        
        </>
    )
}