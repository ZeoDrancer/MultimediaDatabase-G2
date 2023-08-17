import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Access from './pages/Access';
import Login from './pages/Login';
import Host from './pages/Host';
import All from './pages/Categories/all';




function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
           <Route path = "" element={<Home/>}/>
            <Route path = "/Home" element={<Home/>}/>
            <Route path = "/List" element={<List/>}/>
            <Route path = "/Access" element={<Access/>}/>
            <Route path = "/Login" element={<Login />}/>
            <Route path = "/Host" element={<Host/>}/>
            <Route path = "/All" element={<All/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
