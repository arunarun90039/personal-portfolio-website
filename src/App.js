
import './App.css';
import  {Header}  from "./components/Header"
import  {Intro}  from "./components/Home"
import { About } from './components/About';
import { Skills } from './components/skills';
import {Project} from "./components/project"
import {Certificate} from "./components/Certificate"
import {Footer} from './components/footer';

function App() {
  return (<>
   <Header /> <Intro /><About /><Skills /><Project /><Certificate /><Footer />
   </>
  );
}

export default App;
