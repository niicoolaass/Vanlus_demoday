import './Footer.css'
import Logo from './imgs/Logotipo.png'
import { SiLinkedin, SiInstagram,SiGithub, SiGmail } from "react-icons/si";
import { useState } from 'react';
import Termos from '../../../Template/components/Informations/Termos';
import Privacidade from '../../../Template/components/Informations/Privacidade';
import Cookies from '../../../Template/components/Informations/Cookies';

export function Footer () {
    const [termos, setTermos]=useState(false);
    const [privacidade, setPrivacidade]=useState(false);
    const [cookies, setCookies]=useState(false);
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

                    <p onClick={()=>{setTermos(true)}}>Termos e Condições</p>

                    <p onClick={()=>{setPrivacidade(true)}}>Política de Privacidade</p>

                    <p onClick={()=>{setCookies(true)}}>Política de Cookies</p>
                    
                </div>


                <div id='redesSociais' className='footer'>
                
                    <h2><a href="" target="_blank"><SiLinkedin size={40}/></a></h2>

                    <h2><a href="" target="_blank"><SiGmail size={40}/></a></h2>

                    <h2><a href="https://github.com/grupo18proa" target="_blank"><SiGithub size={40}/></a></h2>

                    <h2><a href="https://www.instagram.com/vanlus18/" target="_blank"><SiInstagram size={40}/></a></h2>
                    
                </div>




            </section>
        
        {termos?
        <>
        <div onClick={() => { setTermos(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "10" }}></div>
        <Termos/>
        </>:
        null}

{privacidade?
        <>
        <div onClick={() => { setPrivacidade(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "10" }}></div>
        <Privacidade/>
        </>:
        null}

{cookies?
        <>
        <div onClick={() => { setCookies(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "10" }}></div>
        <Cookies/>
        </>:
        null}
        </>
    )
}