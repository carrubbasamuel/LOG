import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLogin from './Components/Login/AppLogin/AppLogin';
import Register from './Components/Register/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLogin/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
