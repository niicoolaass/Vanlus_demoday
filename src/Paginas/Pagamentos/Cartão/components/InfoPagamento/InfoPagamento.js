import './InfoPagamento.css'
import {AiFillCreditCard} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';

function InfoPagamento () {
    return (
            <div className='InfoPagamento'>
            
                <form id='formulario-pagamento'>

                    <div className='numero-cartao'>
                        <div className='cartao-h2'>
                            <h2>Número de cartão</h2>
                        </div>
                    <label> 
                        <IconContext.Provider value={{size: '10%', color: '#003566'}}>
                        <i><AiFillCreditCard /></i>
                        </IconContext.Provider>
                        <input type="text" name="email" placeholder= 'XXXX.XXXX.XXXX.XXXX'/>
                    </label>
                    </div>
                    
                    <div className='numero-cvv'>
                        <h2>Número CVV</h2>
                    <label>
                        <input type="text" name="email" placeholder= ''/>
                    </label>
                    </div>

                    <div className='numero-cvv'>
                        <h2>Data de validade</h2>
                    
                        <div className='numero-cvv-op'>
                            <label className='data-validade'>
                                <input type="text" name="email" placeholder= ''/>
                            </label>
                            <label className='data-validade2'>
                                <input  type="text" name="email" placeholder= ''/>
                            </label>
                        </div>
                    </div>

                    <div className='btn-pagar'>
                        <button className='pagar'>PAGAR</button>
                    </div>


                </form>
            </div>

    )
}

export default InfoPagamento;