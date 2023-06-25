import './Informations.css';

function Termos(){
    return(
    <div id="infos">
        <div className="header-info"></div>
        <div>
            <h2>Termos e Condições</h2>

            <p>Bem-vindo a plataforma Vanlus, onde todos os serviços são ofertados pela empresa Vanlus cujo nome/ função social é Vanlus S.A, inscrito sob o CNPJ nº 2423488343, com endereço na Rua Tito,54  CEP n° 05051000, Cidade São Paulo, estado SP, representado por meio dessa página na web.</p>
<p>Avisamos previamente que ao acessar esse site e concordar com as disposições contidas nesse documento, o usuário ficará responsável pelas decisões feitas na plataforma, por isso muito atenção ao ler cada uma das cláusulas e obrigações dispostas a seguir:</p>
<input type="checkbox" id="aceito"/><label style={{marginLeft:"5px"}} htmlFor="aceito">Eu concordo com todos os termos</label>
        </div>
    </div>)
}

export default Termos;