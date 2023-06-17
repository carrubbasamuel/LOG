import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Home from './Components/Home/home';
import ImgContainer from './Components/Login/ImgContainer/imgcontainer';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [relationalData, setRelationalData] = useState([]);
  console.log(relationalData);

  return (
    
    isLogin ? <Home relationalData={relationalData} /> : <ImgContainer setIsLogin={setIsLogin} setRelationalData={setRelationalData} />
  );
}

export default App;
