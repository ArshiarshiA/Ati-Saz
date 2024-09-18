import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import NotFind from './Pages/notFind/notFind'
import Melk from './Pages/Melk/Melk';
// import Favor from './Pages/Fawor/Fawor';
// import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:code' element={<Search />} />
        <Route path='/Melk/:MelkCode' element={<Melk />} />
        {/* <Route path='/services' element={<Favor />} /> */}
        {/* <Route path='/about-us' element={<About />} /> */}
        <Route path='/*' element={<NotFind />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
