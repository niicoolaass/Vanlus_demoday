import '../Account/Account.css';
import PaymentImg from './img/payment.png';

function Payment() {
    return (
        <>
            <div className="container-a pagamento">
                <div className="container-b">
                    <h2>Pagamento</h2>
                    <div className="informations">
                        <h3>Notificações</h3>
                        <h4>Novembro</h4>
                        <p>Recebemos o pagamento de Maria Silva</p>
                        <p>Recebemos o pagamento de Larissa Santos</p>
                        <h4 style={{ marginTop: "110px" }}>Outubro</h4>
                        <p>Depositamos seu pagamento mensal. :)</p>
                        <p>Recebemos o pagamento de Davi Moreira</p>
                    </div>
                </div>
                <div className="container-c">
                    <form>
                        <div>
                            <p>
                                <span>Agência:</span>
                                <input type="text" placeholder="1409" disabled></input>
                            </p>
                            <p>
                                <span>Dígito:</span>
                                <input type="text" placeholder='1'  disabled></input>
                            </p>

                        </div>
                        <span>Conta</span>
                        <input type="text" placeholder='0153869' disabled></input>
                        <div className='typeAccount'>

                            <span>Tipo de conta:</span>
                            <p>
                                <input type="radio" id="conta-corrente" name="tipo-conta" value="conta-corrente" checked /><label htmlFor="conta-corrente" >Conta corrente</label>

                            </p>
                            <p>
                                <input type="radio" id="conta-poupanca" name="tipo-conta" value="conta-poupanca" /><label htmlFor="conta-poupanca">Conta poupança</label>

                            </p>

                        </div>
                    </form>
                </div>
                <img style={{position:"absolute", bottom:"15px", right:"30px"}}  src={PaymentImg}/>
            </div>
        </>
    )
}

export default Payment;