import './trajeto.css'
import Mapinha from './img/mapa.png';
import Tio from './img/tiorubens.jpg';
import Place from './img/location.png';

import { BsInfoSquare } from 'react-icons/bs'
import { BiWorld, BiTimer } from 'react-icons/bi'
import {  BsStarFill, BsStarHalf } from 'react-icons/bs'

function Trafego() {
    return(
        <div className='follow'>
            <div className='map'>
                <img src={Mapinha}/>
            </div>

        <div className='right_side_yellow'>
            <h1>STATUS</h1>

<div className='space'></div>


                <h3>DISTÂNCIA</h3> 
            <div className='first_status'>
                <BsInfoSquare size={25} /> <p>3km para a próxima cliente</p>
            </div>

<div className='space'></div>

                <h3>GASOLINA</h3> 
            <div className='middle_distant'>
                <BiWorld size={25}/> <p>9,1 km/l</p>
            </div>

<div className='space'></div>

                <h3>TEMPO PERCORRIDO</h3>
            <div className='last_time'>
                <BiTimer size={25}/><p>40 minutos</p>
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

export default Trafego;