import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/components/Home';
import About from './about/About';

function App() {
  return(
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
