import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/home';
import ImgContainer from './Components/Login/ImgContainer/imgcontainer';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [relationalData, setRelationalData] = useState([]);


  //* use effect for check if user is login
  useEffect(() => {
    let login = localStorage.getItem('token');
    let data = localStorage.getItem('data');
  
    setRelationalData(data ? JSON.parse(data) : []);
    setIsLogin(login ? true : false);
  }, []);
  


  console.log(isLogin);
  console.log(relationalData);

  return (
    isLogin ? <Home relationalData={relationalData} /> : <ImgContainer isLogin={isLogin} setIsLogin={setIsLogin} setRelationalData={setRelationalData} />
  );
}

export default App;
