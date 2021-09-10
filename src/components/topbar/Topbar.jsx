import "./topbar.scss";
import Mail from "@material-ui/icons/Mail";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name">
            Christopher Zacharias
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <div id="email">c.zacharias2021@gmail.com</div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
