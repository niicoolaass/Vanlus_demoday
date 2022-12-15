import './SobreNos.css'
import { IconContext } from 'react-icons/lib'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { useEffect, useState, useRef } from 'react'



export function SobreNós () {

    const [data, setData] = useState([])
    const carrossel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/carrosel.json')
            .then((Response)=> Response.json())
            .then(setData);

    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();

        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;


        
    }

    const handleRigthClick = (e) => {
        e.preventDefault();

        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    if(!data || !data.length) return null;
    return(

        <>
            <div id='sobreNos'>  

                    <div className='SubTitulo'>

                        <h2>Sobre nós</h2>
                        <p>O que somos? Quem somos? O que fazemos? Conheça nossa história e descobrirá.</p>

                        </div>
                        <div className='botao_esquerda'>
                            <IconContext.Provider value={{size: "90px"}} >
                            <button onClick={handleLeftClick}>
                                <AiOutlineDoubleLeft />
                            </button>
                            </IconContext.Provider>
                        </div>
                    <div id='carrossel' ref={carrossel}>
                     {data.map((item) => {
                            const {id, name, sobre, image} = item
                    
                     return   (
                        <div className='item' key={id}>                       
                            
                            <div className='img_sobre'>

                                <img className = 'imagem-sobre' src={image} alt={name} />

                            </div>
                            <div className='info_sobre'>
                                <span className='titulo_sobre'>
                                    <h2>{name}</h2>
                                </span>

                                <div className='descricao_sobre'>
                                <p>{sobre}</p>                           
                                </div>
                            </div>
       
                        </div>
                            );
                        })}
                    </div>
                    <div className='botao_direita'>
                            <IconContext.Provider value={{size: "90px"}} >
                            <button onClick={handleRigthClick}>
                                <AiOutlineDoubleRight />
                            </button>
                            </IconContext.Provider>
                    </div>     
            </div>
        </>

    )
}