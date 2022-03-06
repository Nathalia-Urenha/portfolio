import Home from './components/home/Home';
import MyStory from './components/myStory/MyStory';
import NavBar from './components/navbar/NavBar';
import Skills from './components/skills/Skills';
import Tcc from './components/TCC/Tcc';
import Project from './components/Project/Project';
import './app.scss';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
     <NavBar />
     <div className="sections">
       <Home />
       <MyStory />
       <Skills />
       <Tcc />
       <Project />
     </div>
     
    </div>
  );
}

export default App;
