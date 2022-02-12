
import {BrowserRouter as Router , Routes ,Route  } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Ship from './components/Ships/ships';
import AddShip from './components/AddShip/AddShip';
import Crew from './components/Crew/Crew';
import AddCrew from './components/AddCrew/AddCrew';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
              <Route path='/' element={<MainPage/>}></Route>
              <Route path='/ships' element={<Ship/>}></Route>
              <Route path='/add_ship' element={<AddShip/>}></Route>
              <Route path='/crew' element={<Crew/>}></Route>
              <Route path='/add_membru' element={<AddCrew/>}></Route>

            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
