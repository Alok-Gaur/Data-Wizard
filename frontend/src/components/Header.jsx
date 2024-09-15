import { FaJoget } from "react-icons/fa";
const Header = () => {
  return (
    <header className="p-3 text-bg-dark mainHeader">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <FaJoget className="logo" />
            <h4 className=" app-name">INTERN HUB</h4>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 list-items">
            <li>
              <a href="#" className="nav-link px-2 textHeader list-item-active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 textHeader">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 textHeader">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 textHeader">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 textHeader">
                About
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              className="  me-2 textHeader login"
              
            >
              Login
            </button>
            <button type="button" className=" btn-warning textHeader sign-up">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
