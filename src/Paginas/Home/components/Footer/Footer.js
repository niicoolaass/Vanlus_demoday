import './Footer.css'
import Logo from './imgs/Logotipo.png'

export function Footer () {
    return (
        <>
        
            <section id='footer'>


                <div className='footer'>

                    <img src={Logo} alt=''/>

                    <h2>Contato</h2>

                    <p>Rua, número, CEP</p>
                    <p>(11) 99999-9999</p>

                </div>


                <div id='links' className='footer'>

                    <h2>Links Rápidos</h2>

                    <p>Termos e Condições</p>

                    <p>Política de Privacidade</p>

                    <p>Política de Cookies</p>
                    
                </div>


                <div id='redesSociais' className='footer'>
                
                    <h2>LinkedIn</h2>

                    <h2>Facebook</h2>

                    <h2>Instagram</h2>

                    <h2>GitHub</h2>
                    
                </div>




            </section>
        
        
        </>
    )
}