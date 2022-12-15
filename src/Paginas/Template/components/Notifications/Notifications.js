import { useState } from 'react';
import './Notifications.css'

function Notifications() {

    const [classAtiva, setClasseAtiva] = useState(true);

    const TodayNots=<div className='notification'>
        Seu <b>contrato</b> foi enviado ao seu email.
        </div>;

    const AllNots=<> {TodayNots}
    <div className='notification'>
    Seu <b>contrato</b> está sendo avaliado.
    </div>
    <div className='notification'>
    Você fechou <b>contrato</b> com <b>Tio Rubens</b>.
    </div>
    </>;

    return (
            <div className="div-notifications">
                <div className="not-header">
                    <span>Notificações</span>
                    <div className="bar-notifications">
                        <p onClick={() => setClasseAtiva(!classAtiva)} className={classAtiva ? "ativo" : "desativo"}>Hoje</p>
                        <p onClick={() => setClasseAtiva(!classAtiva)} className={classAtiva ? "desativo" : "ativo"}>Todas</p>
                    </div>
                </div>
            {classAtiva?(
                TodayNots
            )
            :AllNots}
            </div>
        )
    
    }

       


export default Notifications;