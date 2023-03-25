import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import BusquedaPoke from './views/BusquedaPoke';
import DetallePoke from './views/DetallePoke';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pokemones" element={<BusquedaPoke />} />
          <Route path="/pokemones/:name" element={<DetallePoke />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
