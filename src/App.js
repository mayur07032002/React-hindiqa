import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import System from './Components/System';
import About from './Components/About';

function App() {

  return (
    <>
      <Router>
        <Header />

        <div className="main mb-3">

          <Routes>
            <Route exact path="/" element={<System />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>

        <Footer/>
        
      </Router>
    </>
  )
}

export default App;
