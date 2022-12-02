import './LateralDados.css'
import cartoes from './imgs/cartoes.png'

function LateralDados() {
    return (
        <div className='LateralDados'>

                <img className='foto-cartoes' src={cartoes} alt='celular'></img>

            <div className='info-dados'>

                <div className='info-dados1'>

                <p><span>NOME COMPLETO</span></p>
                <p>Adriana Parravano</p>
                </div>

                <div className='info-dados2'>

                <p><span>EMAIL</span></p>
                <p>Adriana.parravano@gmail.com</p>
                </div>

                <div className='info-dados3'>

                <p><span>BENEFICIARIO</span></p>
                <p>Rubens Migliorini</p>
                </div>

                <div className='info-dados4'>

                <p><span>VENCIMENTO</span></p>
                <p>11/12/2022</p>
                </div>

                <div className='info-valor'>
                    <p>VALOR</p>
                    <p>R$ 120,<span>00</span></p>
                </div>
            </div>


        </div>

    )
}

export default LateralDados;