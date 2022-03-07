import Folder from '../folder/Folder';
import './tcc.scss';

export default function Tcc() {
  return (
    <div className="tcc" id="tcc">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/graduating.png" alt="graduating" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Trabalho de Conclusão de Curso</h2>
          <h1>Tema:</h1>
          <h3>Controle da temperatura da água de um chuveiro, através da automatização da dissipação da potência elétrica.</h3>
          <Folder path={"https://drive.google.com/drive/folders/1WL2invnD16GR4uxwrV01MqdcpwUln6SI?usp=sharing"} title={"Projeto"}/>
          <Folder path={"https://drive.google.com/drive/folders/132wkzedKQhnQqKSqKyUsVBmyC4ydSsqu"} title={"Referencial Teórico"}/>
          <Folder path={"https://drive.google.com/drive/folders/1jiY68Yt5-6ZIWiNDcbiAhXU0nKVuNuJF?usp=sharing"} title={"Apresentações"}/>
        </div>        
      </div>
    </div>
  )
}
