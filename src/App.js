import './App.css';

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
      <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Characters</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/char/:char_id" element={<Detail/>} />
          <Route path="/quotes/*" element={<Quotes/>} />
          <Route path="/quotes/:quote_id" element={<QuoteDetail/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
