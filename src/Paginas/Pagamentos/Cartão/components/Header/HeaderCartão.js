import Logo from '../../../../../styles/imgs/Logo 3.png'

import './HeaderCartão.css'

function HeaderCartão () {
    return (
            <div className='HeaderCartão'>
                
                <div className='intro'>

                <img className='vanimg' height='15%' src={Logo} alt='Logo'/>
                    <h1>A Vanlus preza pela segurança de todos os seus dados</h1>
                </div>
                
            </div>
            
    )
}

export default HeaderCartão;