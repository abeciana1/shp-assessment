import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

//! import pages here
import Home from './pages/Home'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
  );
}

export default App;
