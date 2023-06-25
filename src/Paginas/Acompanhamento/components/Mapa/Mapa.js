import './Mapa.css'
import Tio from './img/tiorubens.jpg';
import Place from './img/location.png';
import { BsInfoSquare } from 'react-icons/bs'
import { BiWorld, BiTimer } from 'react-icons/bi'
import {  BsStarFill, BsStarHalf } from 'react-icons/bs'
import MapPage from '../MapsApi';

function Mapa() {
    return(
        <div className='follow'>

            <div className='map'>

                <MapPage />

            </div>

        <div className='right_side'>
            <h1>SEU CONDUTOR</h1>

<div className='space'></div>

                <div className='conductor_status'>
                    <img src={Tio}/>
                      <div className='name_conductor'>
                        <h2>Tio Rubens</h2>
                        <BsStarFill color='#FFC300' size={20}/>
                        <BsStarFill color='#FFC300' size={20}/>
                        <BsStarFill color='#FFC300' size={20}/>
                        <BsStarFill color='#FFC300' size={20}/>
                        <BsStarHalf color='#FFC300' size={20}/>
                      </div>
                </div>

<div className='space'></div>

                <h3>STATUS</h3> 
            <div className='first_status'>
                <BsInfoSquare size={25} /> <p>Levando seu filho á escola</p>
            </div>

<div className='space'></div>

                <h3>DISTÂNCIA</h3> 
            <div className='middle_distant'>
                <BiWorld size={25}/> <p>5km da sua casa</p>
            </div>

<div className='space'></div>

                <h3>TEMPO PREVISTO</h3>
            <div className='last_time'>
                <BiTimer size={25}/><p>20 minutos</p>
            </div>

<div className='space'></div>

            <div className='local'>
                <img src={Place}/>
                    <div className='street'>
                        <strong>Rua São José</strong>
                    </div>
            </div>

        </div>
    </div>
    )
}

export default Mapa;