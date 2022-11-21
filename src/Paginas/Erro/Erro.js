import './Erro.css'
import Ghost from './img/ghost.png'
import Tangled_line from './img/tangled_line.png'
import {Link } from 'react-router-dom';

function Erro(){
return(
    <div class="erro">
    <div>
        <p>404</p>
    </div>
    <div>
        <h1>PÁGINA NÃO ENCONTRADA</h1>
        <p>Desculpe mas a página que você procura não foi encontrada.</p>
        <div><Link to='/'>HOME</Link></div>
    </div>
    <img src={Tangled_line} style={{position:"absolute", zIndex:"99", bottom:"270px", right:"170px", height:"100px", transform:"rotate(-40deg)", filter:"drop-shadow( 13px -11px 4px rgba(0, 0, 0, 0.281))"}} alt="boy walking"/>
    <img src={Ghost} style={{position:"absolute", zIndex:"99", bottom:"120px", right:"30px", height:"200px", filter:"drop-shadow( 13px -11px 4px rgba(0, 0, 0, 0.281))"}} alt="boy walking"/>
    </div>
    
)
}

export default Erro;