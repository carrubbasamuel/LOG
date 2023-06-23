import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import img from "../../asset/loginImg.jpg";
import FormLogin from "../Form/form";
import "./AppLogin.css";

import Home from '../../Home/home';

export default function AppLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [relationalData, setRelationalData] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('login') === 'true';
    if (isLoggedIn) {
      setIsLogin(true);
      const data = JSON.parse(localStorage.getItem('data'));
      setRelationalData(data);
    }
  }, []);

  const handleLogin = (data) => {
    setIsLogin(true);
    setRelationalData(data);
    localStorage.setItem('login', true);
    localStorage.setItem('data', JSON.stringify(data));
  };

  const handleLogout = () => {
    setIsLogin(false);
    setRelationalData([]);
    localStorage.removeItem('login');
    localStorage.removeItem('data');
  };

  if (isLogin) {
    return <Home relationalData={relationalData} handleLogout={handleLogout} />;
  }

  return (
    <div id="img-container">
      <div className="image-wrapper">
        <Image src={img} fluid />
      </div>
      <FormLogin handleLogin={handleLogin} />
    </div>
  );
}
