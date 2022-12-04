import './Account.css'
import User from '../Header/img/adriana.jpg'

function ContaResponsavel() {
    return (<>
        <div className="container-a animation container-responsavel">
            <div className="container-b">
                <div className="header">
                    <img alt="userPhoto" src={User} width="100px" height="100px" style={{ borderRadius: "50%" }} />
                </div>
                <form>
                    <span>Nome:</span>
                    <input type="text" value="Adriana Parravano Neves" disabled></input>
                    <span>Endereço:</span>
                    <input type="text" wrap="hard" value="Rua das Margaridas, 34, Santana, 03040-020" disabled></input>
                    <span>Telefone:</span>
                    <input type="tel" value="99999-9090" disabled></input>
                    <span>Email:</span>
                    <input type="email" value="adriana.pavarrano@gamil.com" disabled></input>
                    <span>RG:</span>
                    <input type="number" value="212915058" disabled></input>
                    <span>CPF:</span>
                    <input type="number" value="61520972822" disabled></input>
                </form>
            </div>
            <div className="container-c">
            <h2>Infromações do passageiro</h2>
                        <form>
                            <span>Nome:</span>
                            <input type="text" value="Mirella Parravano Neves" disabled></input>
                            <span>RG:</span>
                            <input type="number" value="243170580" disabled></input>
                            <span>CPF:</span>
                            <input type="number" value="95141750000" disabled></input>
                            <span>Escola:</span>
                            <input type="text" value="Escola Estadual São Domingues" disabled></input>
                            <span>Turno:</span>
                            <input type="text" value="Manhã (9:00 às 13:00), ida e volta" disabled></input>
                            <span>Possui necessidades especiais:</span>
                            <input type="text" value="Não" disabled></input>
                        </form>
            </div>
        </div>
    </>)
}

export default ContaResponsavel;