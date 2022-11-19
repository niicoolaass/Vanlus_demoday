import './Template.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Extra from './components/Extra/Extra';

function Template(props) {

    return (
        <div className="homeR">
            <Sidebar />
            <div>
                <Header />
                <div style={{ display: "flex" }}>
                    {props.element}
                    <Extra />
                </div>
            </div>

        </div>

    )
}

export default Template;