import '../../Filter.css';
import {useState} from 'react';
import {  BsStarFill, BsStarHalf } from 'react-icons/bs'
import ContaCondutores from '../../../../../Template/components/Account/ContaCondutores';

function Conductor(props){
    const [accountVisible, setAccountVisible] = useState(false);

    return(
    <> <div className='conductor' onClick={()=>{setAccountVisible(true)}}>
    <div className='first'>
        <img alt="imagem-condutor" className='img_conductor' src={props.src} />
    
        <div className='title'>
            <h1>{props.apelido}</h1>
            <p>{props.local}</p>
        </div>
    
    </div>
    
    <div className='middle'>
        <div className='descrition'>
            <strong>Descrição:</strong><p>{props.description}</p>
        </div>
    </div>
    
    <div className='last'>
        <div className='price'>
            <strong>{props.price}</strong>
        </div>
    
        <div className='review'>
            <BsStarFill color='#FFC300' size={20} />
            <BsStarFill color='#FFC300' size={20} />
            <BsStarFill color='#FFC300' size={20} />
            <BsStarFill color='#FFC300' size={20} />
            <BsStarHalf color='#FFC300' size={20} />
        </div>
    </div>
    
   
    </div> {accountVisible ?
    (<> <div onClick={() => { setAccountVisible(false) }} style={{ backgroundColor: "rgba(0, 0, 0, 0.199)", left: "0",top:"0", width: "100vw", height: "190vh", position: "fixed", zIndex: "10" }}></div>
    {<ContaCondutores src={props.src} nome_condutor={props.nome} apelido= {props.apelido} description= {props.description}/>}</>) : null}
    <div className='space'></div></>
   )
}

export default Conductor;
