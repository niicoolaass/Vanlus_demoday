import '../../Filter.css';
import {useState} from 'react';
import {  BsStarFill, BsStarHalf } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Account from '../../../../../Template/components/Account/Account'
import Chat from '../../../../../Template/components/Chat/Chat';

function Conductor(props){
    const [accountVisible, setAccountVisible] = useState(false);
    const [chatVisible, setChatVisible] = useState(false);

    return(
    <> <div className='conductor' onClick={()=>{setAccountVisible(true)}}>
    <div className='first'>
        <img alt="imagem-condutor" className='img_conductor' src={props.src} />
    
        <div className='title'>
            <h1>{props.apelido}</h1>
            <p>{props.local}</p>
        </div>
    
        <div  onClick={() => { setChatVisible(true) }} className='messages'>
            <MdEmail size={40} color='#003566' />
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
    {Account().accountCondutores(props.src, props.nome, props.apelido, props.description)}</>) : null}
    {chatVisible
                ? (
                    <>
                        <div onClick={() => { setChatVisible(false) }} style={{top: "0", left: "0", width: "100vw", height: "190vh", position: "fixed", zIndex: "99" }}></div>
                        <Chat src={props.src} apelido={props.apelido}/>
                    </>
                )
                : null
            }
    <div className='space'></div></>
   )
}

export default Conductor;
