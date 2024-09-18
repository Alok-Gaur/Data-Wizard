import { FaJoget } from "react-icons/fa";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <div className={css.logo}>
        <FaJoget className={css.logo1}/>
        INTERN HUB</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
      <div className={css.authButtons}>
        <button className={css.loginBtn}>Login</button>
        <button className={css.registerBtn}>Register</button>
      </div>
    </header>
  );
};

export default Header;
