import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Access from './pages/Access';
import Login from './pages/Login';
import Host from './pages/Host';
import All from './pages/Categories/all';
import Music from './pages/Categories/Music';
import Books from './pages/Categories/Books';
import Movies from './pages/Categories/Movies';
import Series from './pages/Categories/Series';
import VideoGames from './pages/Categories/VideoGames';



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
              <Route path = "/Music" element={<Music/>}/>
              <Route path = "/Books" element={<Books/>}/>
              <Route path = "/Movies" element={<Movies/>}/>
              <Route path = "/Series" element={<Series/>}/>
              <Route path = "/VideoGames" element={<VideoGames/>}/>
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
