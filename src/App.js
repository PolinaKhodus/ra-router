import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//menu
import Menu from './components/menu/Menu';
import HomePage from './components/pages/HomePage';
import DriftPage from './components/pages/DriftPage';
import TimeAttackPage from './components/pages/TimeAttackPage';
import ForzaPage from './components/pages/ForzaPage';

function App() {

  return (
    <>
      <Router>
        <div className="task-title">Menu</div>
        <div className='menu-wrapper'>
          <Menu />
          <div className="page">
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </div>
        </div>
      </Router>      
    </>
  );
}

export default App;
