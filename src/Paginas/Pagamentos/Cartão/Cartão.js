import HeaderCartão from "./components/Header/HeaderCartão";
import InfoPagamento from "./components/InfoPagamento/InfoPagamento";
import LateralDados from "./components/LateralDados/LateralDados";
import LateralPagamento from "./components/LateralPagamento/LateralPagamento";

function Cartão () {
    return (
        <div className="Cartão">

            <HeaderCartão />
            <InfoPagamento />
            <LateralPagamento />
            <LateralDados />
            
        </div>
    )
}

export default Cartão;