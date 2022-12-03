import './Account.css'
import User from '../../../HomeResponsavel/components/Filter/imgs/tiorubens.jpg'

function ContaCondutor() {
    return (<>
        <div className="container-a animation container-condutor">
            <div className="container-b">
                <div className="header">
                    <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%" }} />
                </div>
                <form>
                <span>Nome:</span>
                        <input type="text" value="Rubens Migliorini" disabled></input>
                        <span>Telefone:</span>
                        <input type="tel" value="98080-5243" disabled></input>
                        <span>Email:</span>
                        <input type="email" value="rubensmigliorini@gamil.com" disabled></input>
                        <span>RG:</span>
                        <input type="number" value="212915736" disabled></input>
                        <span>CPF:</span>
                        <input type="number" value="61582932822" disabled></input>
                </form>
            </div>
            <div className="container-c">
            <h2>Infromações do veículo</h2>
                    <form>
                        <span>Modelo do veículo:</span>
                        <input type="text" value="Van Transit" disabled></input>
                        <span>Número da placa:</span>
                        <input type="text" value="ABC-1234" disabled></input>
                        <span>CNH:</span>
                        <input type="number" value="82513736398" disabled></input>
                        <span>CRVL:</span>
                        <input type="text" style={{ color: "green" }} value="Aprovado pela Vanlus" disabled></input>
                        <span>Escola(s):</span>
                        <input type="text" value="Escola Estadual São Domingues" disabled></input>
                        <span>Horário(s):</span>
                        <input type="text" value="Manhã e Tarde" disabled></input>
                    </form>
            </div>
        </div>
    </>)
}

export default ContaCondutor;