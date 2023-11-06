import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderImg">
        <img src="/Images/brand_logo.png" alt="" />
      </div>
      <div className="HeaderList">
        <ul className="List">
          <li className="ListTag">MENU</li>
          <li className="ListTag">LOCATION</li>
          <li className="ListTag">ABOUT</li>
          <li className="ListTag">CONTACT</li>
        </ul>
      </div>
      <div className="HeaderButton">
        <input className="Button" type="button" value="Login" />
      </div>
    </div>
  );
}
