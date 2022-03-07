import './myStory.scss';
import {useState} from 'react';
import {ArrowDropDown} from '@material-ui/icons';

export default function MyStory() {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  return (
    
      <div className="mystory" id="mystory">
      <div className="left">
        <div className="wrapper">
          <button onClick={showOrHide}>Minha História <ArrowDropDown /></button>
          { showElement ? 
          <p className="text">
            Eu sou a Nathália, tenho <span>21 anos</span>, e estou no 9º semestre de <span>Engenharia de Computação </span>. 
            Sempre estudei em escola pública e decidi que queria cursar Engenharia no meu 3º ano do Ensino Médio.  
            Eu tomei essa decisão por algumas razões, dentre elas está a minha paixão por <span>tecnologia e matemática.</span>
            Sempre me destaquei em matemática quando estava na escola, e sempre fui muito curiosa a respeito de tecnologia, 
            tanto inovações como a própria computação. No final  de 2017, quando eu esteva finalizando o 3º ano do ensino médio 
            eu comecei a  prestar os vestibulares das universidades estaduais, e  realizei o ENEM. A partir  dele, eu pude ver as 
            faculdades que eu conseguiria entrar, e lá estava o <span>IFSP  - campus Birigui</span>, que era o mais próximo de minha cidade. 
            Me inscrevi no   SISU, e passei na primeira chamada. Ingressei no início de 2018, e desde então eu não me vejo fazendo 
            outra coisa que não seja nessa área.
            Atualmente eu faço  estágio na empresa <span>Gorila Invest</span>, atuando como <span>desenvolvedora front-end</span>, entrei nesse estágio em 
            outubro de 2021, e estou aprendendo muitas coisas e  amando o que estou fazendo. Meus planos para o futuro é terminar 
            minha graduação e continuar nessa área de desenvolvimento web, que foi a que eu mais me identifiquei até agora.
          </p> : null }
        </div>

      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/studant.png" alt="studant" />
        </div>
      </div>
    </div>

    
  )
}
