import './App.scss';
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Detail from './Components/Detail';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
