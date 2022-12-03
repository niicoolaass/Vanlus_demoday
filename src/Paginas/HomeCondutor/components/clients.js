import './clients.css';
import { useState } from 'react';
import Conductor from '../../HomeResponsavel/components/Filter/components/Conductor/Conductor';
import Mirella from './imgs/mirella3x4.jpg'
import GirlStar from './imgs/girlstar.png'
import { AiOutlineUsergroupAdd } from 'react-icons/ai';


function Clients() {
    const [filter, setFilter] = useState("nenhum");

    return (
        <div className='clients'>

            <div className='space_filter'></div>

            <div className="new_contract" >
                <div className='contract_plus'>
                    <AiOutlineUsergroupAdd size={50}/>
                </div>
                
                <div className='text_contract'>
                    <p>NOVOS CONTRATOS</p>
                </div>
            </div>

            <div className='right_img_girl' style={{zIndex:"-33"}}>
                <img  src={GirlStar}/>
            </div>
        

            <div className='space_first'></div>
            
            {filter === "nenhum" ?
                (<>
                    <Conductor
                        src={Mirella}
                        nome="Margarida dos Anjos Alves Santos"
                        apelido="Margarida"
                        local="Responsável por Mirella Alves"
                        description="Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010..."

                    />


                    <Conductor
                        src={Mirella}
                        nome="Erica de Souza"
                        apelido="Erica"
                        local="Responsável por Cristhian de Souza"
                        description="Olá, sou a tia Marcia. Sou uma condutora dedicada que amo meus anjinhos... "

                    />

                    <Conductor
                        src={Mirella}
                        nome="Marcos Avelar Figueired"
                        apelido="Tio Marcos"
                        local="Atende em Colégio Bellatrix"
                        description="Eae rapaziada, sou o tio Marcos ao seu favor. Desde 2007, trabalho em escolas..."

                    />

                    <Conductor
                        src={Mirella}
                        nome="Edson Sebastião"
                        apelido="Tio Edson"
                        local="Atende em Colégio Vila Romana"
                        description="Olá, tudo bem? Eu sou o Edson, tenho 32 anos e trabalho como condutor faz 3 anos..."

                    />

                    <Conductor
                        src={Mirella}
                        nome="Vitória Sabugueiro"
                        apelido="Tia Vivi"
                        local="Atende em Colégio Saberes"
                        description="Olá, tudo bem? Eu sou a Vivi, junto com o meu parceiro, nós trabalhamos há 9 anos..."
                        price="R$ 140,00"
                    /></>)
                : filter === "price" ? (<>
                    <Conductor
                        src={Mirella}
                        nome="Edson Sebastião"
                        apelido="Tio Edson"
                        local="Atende em Colégio Vila Romana"
                        description="Olá, tudo bem? Eu sou o Edson, tenho 32 anos e trabalho como condutor faz 3 anos..."
                        price="R$ 125,00"
                    />
                    <Conductor
                        src={Mirella}
                        nome="Rubens Migliorini"
                        apelido="Tio Rubens"
                        local="Atende em Colégio Freire Castro/ Tic Tac"
                        description="Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010..."

                    /></>)
                    : filter === "local" ? (
                        <>
                            <Conductor
                                src={Mirella}
                                nome="Rubens Migliorini"
                                apelido="Tio Rubens"
                                local="Atende em Colégio Freire Castro/ Tic Tac"
                                description="Olá, sou o tio Rubens. Trabalho como condutor de van escolar desde 2010..."

                            />
                        </>
                    ) : null}


        </div>


    )
}

export default Clients;