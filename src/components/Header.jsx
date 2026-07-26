import logo from "../assets/logo.png";
function Header({ name }) {
  return (
    <header className="header">

      <div className="header-content">

        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />

          <div>
            <h1>{name}</h1>

            <p>INFORMATION TECHNOLOGY Student</p>
          </div>
        </div>

        </div>

    </header>
  );
}

export default Header;