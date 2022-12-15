import '../Account/Account.css';
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai'
import { BiSquare } from 'react-icons/bi'
import { useState } from 'react';

function ListaPresenca() {
    const [presenca, setPresenca]=useState(<BiSquare size={35}/>)
    return (
        <>
            <div className="container-a lista-presenca">
                <div className='container-b'>
                    <div className='children'>
                        <h2>Mirella Parravano de Neves</h2>
                    </div>

<div className='space'></div>

                    <div className='contact'>

                        <h3>Responsável</h3>
                            <p className='square_white'>Adriana Parravano de Neves</p>

<div className='space'></div>

                        <h3>Escola</h3>
                            <p className='square_white'>Escola Estadual Dr. Edmundo de Carvalho</p>
                            
<div className='space'></div>

                        <h3>Endereço</h3>
                            <p className='square_white'>R. Tito, 54- Vila Romana, São Paulo - SP, 05051-000</p>

<div className='space'></div>

                        <h3>Celular</h3>
                            <p className='square_white'>(11) 12345-6789</p>
                    </div>

<div className='space'></div>

                    <div className='presence'>

                        <div className='check' onClick={()=>{setPresenca( <AiOutlineCheckSquare size={35}/>)}}>
                            <AiOutlineCheckSquare size={45}/>
                        </div>

                        <div className='close'onClick={()=>{setPresenca( <AiOutlineCloseSquare size={35}/>)}}>
                        <AiOutlineCloseSquare size={45} />
                        </div>

                    </div>

                </div>
                <div className='container-c'>
                    <h1>Lista de presença:</h1>

<div className='space'></div>

                <div className='all_list'>

                    <div className='list_children_selected'>
                            <p>Mirella Parravano de Neves</p>
                            {presenca}
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>
                     
                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>
    
<div className='space_list'></div>

                    <div className='list_children'>
                        <p>Mirella Parravano de Neves</p>
                        <BiSquare size={35}/>
                    </div>

<div className='space_list'></div>

                </div>    

                </div>
            </div>
        </>
    )
}

export default ListaPresenca;