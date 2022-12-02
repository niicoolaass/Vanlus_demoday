import './Filter.css';
import { BiLike } from 'react-icons/bi'
import { BsMap } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsStar} from 'react-icons/bs'
import { useState } from 'react';
import Conductor from './components/Conductor/Conductor';

import BoySmile from './imgs/boysmile.png'

import Rubens from './imgs/tiorubens.jpg'
import Marcia from './imgs/tiamarcia.jpg'
import Marcos from './imgs/tiomarcos.jpg'
import Edson from './imgs/tioedson.jpg'
import Vivi from './imgs/vivi.jpg'

function Filter() {
    const [filter, setFilter] = useState("nenhum");

    return (
        <div className='suggestions'>

            <div className='space_filter'></div>

            <div className="filter" >
                <div className='topics' onClick={() => { setFilter("nenhum") }}>
                    <BiLike color='#41B3F4' size={20} /> <p>RECOMENDADOS</p>
                </div>
                <div className='topics' onClick={() => { setFilter("local") }}>
                    <BsMap color='#73620C' size={20} /> <p>MAIS PRÓXIMO</p>
                </div>
                <div className='topics' onClick={() => { setFilter("price") }}>
                    <FaRegMoneyBillAlt color='#2A9319' size={20} /> <p>MELHOR PREÇO</p>
                </div>
                <div className='topics' >
                    <BsStar color='#FFC300' size={20} /> <p>RANK</p>
                </div>
            </div>

            <div className='boy'>
                <img src={BoySmile}/>
            </div>

            <div className='space_first'></div>
            {filter ==="nenhum" ?
                (<>
                    <Conductor
                        src={Rubens}
                        nome="Rubens Migliorini"
                        apelido="Tio Rubens"
                        local="Atende em Colégio Freire Castro/ Tic Tac"
                        description="Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010..."
                        price="R$ 130,00"
                    />


                    <Conductor
                        src={Marcia}
                        nome="Mércia Domingues"
                        apelido="Tia Márcia"
                        local="Atende em Escola Dr. Edmundo de Carvalho"
                        description="Olá, sou a tia Marcia. Sou uma condutora dedicada que amo meus anjinhos... "
                        price="R$ 135,00"
                    />

                    <Conductor
                        src={Marcos}
                        nome="Marcos Avelar Figueired"
                        apelido="Tio Marcos"
                        local="Atende em Colégio Bellatrix"
                        description="Eae rapaziada, sou o tio Marcos ao seu favor. Desde 2007, trabalho em escolas..."
                        price="R$ 150,00"
                    />

                    <Conductor
                        src={Edson}
                        nome="Edson Sebastião"
                        apelido="Tio Edson"
                        local="Atende em Colégio Vila Romana"
                        description="Olá, tudo bem? Eu sou o Edson, tenho 32 anos e trabalho como condutor faz 3 anos..."
                        price="R$ 125,00"
                    />

                    <Conductor
                        src={Vivi}
                        nome="Vitória Sabugueiro"
                        apelido="Tia Vivi"
                        local="Atende em Colégio Saberes"
                        description="Olá, tudo bem? Eu sou a Vivi, junto com o meu parceiro, nós trabalhamos há 9 anos..."
                        price="R$ 140,00"
                    /></>)
                : filter === "price" ? (<>
                    <Conductor
                        src={Edson}
                        nome="Edson Sebastião"
                        apelido="Tio Edson"
                        local="Atende em Colégio Vila Romana"
                        description="Olá, tudo bem? Eu sou o Edson, tenho 32 anos e trabalho como condutor faz 3 anos..."
                        price="R$ 125,00"
                    />
                    <Conductor
                        src={Rubens}
                        nome="Rubens Migliorini"
                        apelido="Tio Rubens"
                        local="Atende em Colégio Freire Castro/ Tic Tac"
                        description="Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010..."
                        price="R$ 130,00"
                    /></>)
                    : filter === "local" ? (
                        <>
                            <Conductor
                                src={Rubens}
                                nome="Rubens Migliorini"
                                apelido="Tio Rubens"
                                local="Atende em Colégio Freire Castro/ Tic Tac"
                                description="Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010..."
                                price="R$ 130,00"
                            />
                        </>
                    ) : null}


        </div>


    )
}

export default Filter;