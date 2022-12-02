import './Discount.css';
import Americanas from './imgs/americanas.png'
import Kalunga from './imgs/kalunga.png'
import NovoOlhar from './imgs/novoolhar.png'
import Shop from './imgs/shop.png'

function Discount() {
    return (
        <div className='partner'>

            <h2></h2>

            <div className='americanas'>
                <img src={Americanas}/>
            </div>

<div className='space_discount'></div>

            <div className='kalunga'>
                <img src={Kalunga}/>
            </div>

<div className='space_discount'></div>

            <div className='novo_olhar'>
                <img src={NovoOlhar}/>
            </div>

            <div className='right_img'>
                <img src={Shop}/>
            </div>

        </div>
    )
}

export default Discount;