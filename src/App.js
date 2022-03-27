import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//! import pages here
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
