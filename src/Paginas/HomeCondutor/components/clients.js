import './clients.css';
import { useState } from 'react';
import Conductor from '../../HomeResponsavel/components/Filter/components/Conductor/Conductor';
import Mirella from './imgs/mirella3x4.jpg'
import Erica from './imgs/erica.jpg';
import Patricia from './imgs/patricia.jpg';
import Margarida from './imgs/margarida.jpg'
import GirlStar from './imgs/girlstar.png';
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
                        src={Margarida}
                        nome="Margarida dos Anjos Alves Santos"
                        apelido="Margarida"
                        description="Responsável por Mirella Alves"

                    />


                    <Conductor
                        src={Erica}
                        nome="Erica de Souza"
                        apelido="Erica"
                        description="Responsável por Cristhian de Souza"

                    />

                    <Conductor
                        src={Patricia}
                        nome="Patricia Melo"
                        apelido="Patricia Melo"
                        description="Responsável por Kauã Melo"

                    />

                    <Conductor
                        src={Mirella}
                        nome="Sebastião dos Anjos"
                        apelido="Sebastião"
                        description="Responsável por Maria Luiza dos Anjos"

                    />

                    <Conductor
                        src={Mirella}
                        nome="Josefa Ribeiro"
                        apelido="Josefa"
                        description="Responsável por Gilda Ribeiro"
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