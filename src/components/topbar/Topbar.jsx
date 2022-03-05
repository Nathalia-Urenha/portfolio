import './topbar.scss';
import {GitHub, LinkedIn, WhatsApp} from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">Portfólio Nathália</a>
                    <a href="#home" className="menu">Home</a>
                    <a href="#mystory" className="menu">Minha História</a>
                    <a href="#skills" className="menu">Competências</a>
                    <a href="#tcc" className="menu">TCC</a>
                    <a href="#project" className="menu">Projeto Integrador</a>
                </div>
                <div className="right">
                    <IconButton aria-label="GitHub" className="social" href="https://github.com/Nathalia-Urenha">
                        <GitHub />
                    </IconButton>
                    <IconButton aria-label="Linkedin" className="social" href="https://www.linkedin.com/in/nathalia-maria-urenha-machado-81824916a/">
                        <LinkedIn />
                    </IconButton>
                    <IconButton aria-label="Whatsapp" className="social" href="https://contate.me/nathalia">
                        <WhatsApp />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
