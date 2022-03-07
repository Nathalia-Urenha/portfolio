import Folder from '../folder/Folder';
import './project.scss';

export default function Project() {
  return (
    <div className="project" id="project">
      <div className="left">
        <div className="wrapper">
          <h1>Projeto Integrador</h1>
          <h2>Portfólio</h2>
          <Folder path={"https://drive.google.com/drive/folders/1UjT2uCyrFCiAXtHzaibBJIlnIu7PE9QM?usp=sharing"} title={"Projeto Integrador II"}/>
          <Folder path={"https://drive.google.com/drive/folders/1yrsGPociZ-JXVbUOg1lN2L0DiY7Zt4oN?usp=sharing"} title={" Avaliações do PEA"}/>
          <Folder path={"https://drive.google.com/file/d/1yIU7zwM5d3OyxJI_xh4ugszGaxbuyfxd/view?usp=sharing"} title={"Mapa Mental PJI"}/>
        </div>        
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/writing.png" alt="graduating" />
        </div>
      </div>
    </div>
  )
}
