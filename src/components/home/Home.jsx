import './home.scss';

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/avatar.jpg" alt="avatar" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, sou a</h2>
          <h1>Nathália Urenha</h1>
          <h3>Estudante de Engenharia de Computação</h3>
          <h3>FrontEnd Developer</h3>
          <div className="icons">
            <img src="assets/atom.png" alt="react" />
            <img src="assets/js.png" alt="javascript" />
            <img src="assets/typescript.png" alt="typescript" />
            <img src="assets/node-js.png" alt="node.js" />
            <img src="assets/html-5.png" alt="html" />
            <img src="assets/css-3.png" alt="" />
            <img src="assets/python.png" alt="" />
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
