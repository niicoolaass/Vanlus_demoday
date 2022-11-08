import {Routes,Route,Link} from 'react-router-dom'
import Home from './Paginas/Home/Home.js'
import Login from './Paginas/page2/Login.js';

function App () {
    return(

        <>
            
            <Routes>
                <Route path='/Home' element={<Home />}/>
                <Route path='/page2' element={<Login />}/>
            </Routes>

        </>

    )
}

export default App;         