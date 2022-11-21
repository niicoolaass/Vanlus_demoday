import './Filter.css';
import { BiLike } from 'react-icons/bi'
import { BsMap } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import Rubens from './imgs/tiorubens.jpg'
import Marcia from './imgs/tiamarcia.jpg'
import Marcos from './imgs/tiomarcos.jpg'
import Edson from './imgs/tioedson.jpg'
import Vivi from './imgs/vivi.jpg'

function Filter(){
    return(
    <div className='suggestions'>

<div className='space_filter'></div>

        <div class="filter">
            <div className='topics'>
                <BiLike color='#41B3F4' size={20}/> <p>RECOMENDADOS</p>
            </div>
            <div className='topics'>
                <BsMap color='#73620C' size={20}/> <p>MAIS PRÓXIMO</p>
            </div>
            <div className='topics'>
                <FaRegMoneyBillAlt color='#2A9319' size={20}/> <p>MELHOR PREÇO</p>
            </div>
            <div className='topics'>
                <BsStar color='#FFC300' size={20}/> <p>RANK</p>
            </div>
        </div>

<div className='space_first'></div>

            <div className='conductor'>
                    <div className='first'>
                        <img className='img_conductor' src={Rubens}/>

                        <div className='title'>
                            <h1>Tio Rubens</h1>
                            <p>Atende em Colégio Freire Castro/ Tic Tac</p>
                        </div>
                        
                        <div className='messages'>
                        <MdEmail size = {40} color = '#003566'/>
                        </div>

                    </div>

                    <div className='middle'>
                        <div className='descrition'>
                            <strong>Descrição:</strong><p>Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010... </p>
                        </div>
                    </div>

                    <div className='last'>
                        <div className='price'>
                            <strong>R$ 130,00</strong>
                        </div>

                        <div className='review'>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarHalf color='#FFC300' size={20}/>
                        </div>
                    </div>
            </div>

<div className='space'></div>

            <div className='conductor'>
                    <div className='first'>
                        <img className='img_conductor' src={Marcia}/>

                        <div className='title'>
                            <h1>Tia Márcia</h1>
                            <p>Atende em Escola Dr. Edmundo de Carvalho</p>
                        </div>

                        <div className='messages'>
                            <MdEmail size = {40} color = '#003566'/>
                        </div>

                    </div>

                    <div className='middle'>
                        <div className='descrition'>
                            <strong>Descrição:</strong><p>Olá, sou a tia Marcia. Sou uma condutora dedicada que amo meus anjinhos... </p>
                        </div>
                    </div>

                    <div className='last'>
                        <div className='price'>
                            <strong>R$ 135,00</strong>
                        </div>

                        <div className='review'>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                        </div>
                    </div>
            </div>

<div className='space'></div>

            <div className='conductor'>
                    <div className='first'>
                        <img className='img_conductor' src={Marcos}/>

                        <div className='title'>
                            <h1>Tio Marcos</h1>
                            <p>Atende em Colégio Bellatrix</p>
                        </div>

                        <div className='messages'>
                            <MdEmail size = {40} color = '#003566'/>
                        </div>

                    </div>

                    <div className='middle'>
                        <div className='descrition'>
                            <strong>Descrição:</strong><p>Eae rapaziada, sou o tio Marcos ao seu favor. Desde 2007, trabalho em escolas...</p>
                        </div>
                    </div>

                    <div className='last'>
                        <div className='price'>
                            <strong>R$ 150,00</strong>
                        </div>

                        <div className='review'>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarHalf color='#FFC300' size={20}/>

                        </div>
                    </div>
            </div>

<div className='space'></div>

            <div className='conductor'>
                    <div className='first'>
                        <img className='img_conductor' src={Edson}/>

                        <div className='title'>
                            <h1>Tia Edson</h1>
                            <p>Atende em Colégio Vila Romana</p>
                        </div>

                        <div className='messages'>
                            <MdEmail size = {40} color = '#003566'/>
                        </div>

                    </div>

                    <div className='middle'>
                        <div className='descrition'>
                            <strong>Descrição:</strong><p>Olá, tudo bem? Eu sou o Edson, tenho 32 anos e trabalho como condutor faz 3 anos...</p>
                        </div>
                    </div>

                    <div className='last'>
                        <div className='price'>
                            <strong>R$ 125,00</strong>
                        </div>

                        <div className='review'>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                            <BsStarFill color='#FFC300' size={20}/>
                        </div>
                    </div>
            </div>
            
<div className='space'></div>

            <div className='conductor'>
                <div className='first'>
                <img className='img_conductor' src={Vivi}/>

                    <div className='title'>
                        <h1>Tia Vivi</h1>
                        <p>Atende em Colégio Saberes</p>
                    </div>

                    <div className='messages'>
                        <MdEmail size = {40} color = '#003566'/>
                    </div>
            
            </div>

            <div className='middle'>
                <div className='descrition'>
                    <strong>Descrição:</strong><p>Olá, tudo bem? Eu sou a Vivi, junto com o meu parceiro, nós trabalhamos há 9 anos...</p>
                </div>
            </div>

            <div className='last'>
                <div className='price'>
                    <strong>R$ 140,00</strong>
                </div>

                <div className='review'>
                    <BsStarFill color='#FFC300' size={20}/>
                    <BsStarFill color='#FFC300' size={20}/>
                    <BsStarFill color='#FFC300' size={20}/>
                </div>
            </div>
</div>
<div className='space'></div>
    </div>

    
    )
}

export default Filter;