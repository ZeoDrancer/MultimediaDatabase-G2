import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Access from './pages/Access';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
           <Route path = "" element={<Home/>}/>
            <Route path = "/Home" element={<Home/>}/>
            <Route path = "/List" element={<List/>}/>
            <Route path = "/Access" element={<Access/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
