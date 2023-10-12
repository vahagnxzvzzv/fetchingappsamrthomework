import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Posts from './components/Main/Posts/Posts';
import Comments from './components/Main/Comments/Comments';
import Albums from './components/Main/Albums/Albums';
import Photos from './components/Main/Photos/Photos';
import Todos from './components/Main/Todos/Todos';
import Users from './components/Main/Users/Users';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
