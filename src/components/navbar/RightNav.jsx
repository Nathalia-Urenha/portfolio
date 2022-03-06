import './navbar.scss';
import {GitHub, LinkedIn, WhatsApp} from '@material-ui/icons';
import IconButton from "@material-ui/core/IconButton";
import styled from 'styled-components';


const Ul = styled.ul`
    display: flex;
    color: inherit;
    text-decoration: none; 
    flex-flow: row nowrap;
   // margin-right: 50px;
     
    li {
      padding: 18px 10px;
      display: flex;
      align-items: center;
    }

    a {
      
      font-weight: 700;
      color: inherit;
      text-decoration: none;
      margin-right: 2rem;
      cursor: pointer;
    }

    a:hover{
        color: #3b6368;
    }

    @media (max-width: 1080px){
        flex-flow: column nowrap; 
        background-color: #000;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }

    .socialContainer{
      @media (max-width: 1080px){
        flex-flow: row nowrap; 
        display:flex;
      }
    }

    .social{
      color: inherit;
   
      &:hover{
          color: #3b6368;
      }
    }
`;

const RightNav = ({open}) => {
  return (

    <Ul open = {open}>
      <li><a href="#home">Home</a></li>
      <li> <a href="#mystory">Minha História</a></li>
      <li> <a href="#skills">Competências</a></li>
      <li> <a href="#tcc">TCC</a></li>
      <li> <a href="#project">Projeto Integrador</a></li>
      <li>
        <div className="socialContainer">
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
      </li>
    </Ul>
    
  )
}

export default RightNav