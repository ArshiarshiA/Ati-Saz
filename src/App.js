import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import notFind from './Pages/Search/Search'
// import Favor from './Pages/Fawor/Fawor';
// import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:code' element={<Search />} />
        {/* <Route path='/services' element={<Favor />} /> */}
        {/* <Route path='/about-us' element={<About />} /> */}
        <Route path='*' element={<notFind />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
