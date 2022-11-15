import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddSensorComponent from "./AddSensor/AddSensorComponent";
import './App.css';
import DashboardComponent from "./Dashboard/DashboardComponent";
import EditSensorComponent from "./EditSensor/EditSensorComponent";
import SensorDetailsComponent from "./SensorDetails/SensorDetailsComponent";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-sensor">Add Sensor</Link>
              </li>
              <li>
                <Link to="/edit-sensor">Edit Sensor</Link>
              </li>
              <li>
                <Link to="/sensor-details">Sensor Details</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/add-sensor" element={<AddSensorComponent />} />
            <Route path="/edit-sensor" element={<EditSensorComponent />} />
            <Route path="/sensor-details" element={<SensorDetailsComponent />} />
            <Route path="/" element={<DashboardComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
