import Burguer from './Burguer';
import './navbar.scss';


export default function NavBar() {
    return (
        <div className="topbar">
            <a href="#home" className="logo">Portfólio Nathália</a>
            <Burguer />
        </div>
    )
}
