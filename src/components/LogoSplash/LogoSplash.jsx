import "./LogoSplash.css";
import logo from "../../assets/logo_Q-spoa.jpg";

export default function LogoSplash() {
  return (
    <div className="logo-splash">
      <div className="logo-ripple-wrapper">
        <div className="ripple ripple-1" />
        <div className="ripple ripple-2" />
        <div className="ripple ripple-3" />
        <div className="ripple ripple-4" />
        <div className="logo-circle">
          <img src={logo} alt="Logo Q-spoa" className="logo-splash-img" />
        </div>
      </div>
      <p className="logo-splash-text">Selecciona una categoría para ver el menú</p>
    </div>
  );
}