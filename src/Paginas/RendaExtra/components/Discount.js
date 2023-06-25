import './Discount.css';
import CartaoPan from './imgs/cartao.png'
import Salve from './imgs/salve.png'
import NovoOlhar from './imgs/novoolhar.png'
import Shop from './imgs/shop.png'

function Discount() {
    return (
        <div className='partner'>

            <h2></h2>

            <div className='americanas'>
                <img width="700px" style={{borderRadius:"20px"}} src={CartaoPan}/>
            </div>

<div className='space_discount'></div>

            <div className='kalunga'>
                <img width="700px" style={{borderRadius:"20px"}} src={Salve}/>
            </div>

<div className='space_discount'></div>

            <div className='novo_olhar'>
                <img width="700px" style={{borderRadius:"20px", border:"1px solid #e882a0"}} src={NovoOlhar}/>
            </div>

            <div className='right_img'>
                <img src={Shop}/>
            </div>

        </div>
    )
}

export default Discount;