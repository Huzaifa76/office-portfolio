import Home from './Pages/Home';
import Contact from './components/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Service from './components/Service';
import Mainheader from './components/Mainheader';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import MainVideo from './Pages/MainVideo';
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      
      <Router>
      <Mainheader/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/video' element={<MainVideo/>}/>
        </Routes>
        <Footer/>  
      </Router>


    </div>

  );
}

export default App;
