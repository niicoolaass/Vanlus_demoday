import {DadosCondutor1} from "./components/LeftSide/DadosCondutor"
import { RightSide } from "./components/RightSide/RightSide"
import './CadastroCondutor.css'

function CadastroCondutor () {

    return(

        <>  
            <section id="CadastroCondutor">
                <DadosCondutor1 />
                <RightSide />
            </section>
        </>


    )
}

export default CadastroCondutor;