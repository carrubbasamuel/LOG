import { Image } from "react-bootstrap";
import img from "../../asset/loginImg.jpg";
import FormLogin from "./Form/form";
import "./imgcontaner.css";



export default function ImgContainer({isLogin, setIsLogin, setRelationalData}) {
    return (
        <div id="img-container">
            <div className="image-wrapper">
                <Image src={img} fluid />
            </div>
            <FormLogin isLogin={isLogin} setIsLogin={setIsLogin} setRelationalData={setRelationalData} />
        </div>
    );
}
