import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
  <a href="/" className="px-3">
    <img className="h-16" src={Logo} alt="logo"></img>
  </a>
);

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between align-middle p-1 border-2 shadow-md">
      <Title />
      <div className="flex justify-evenly py-5">
        <ul className="flex justify-evenly">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <Link to="#">Cart</Link>
          </li>
        </ul>

      <button
        className="h-6 px-4"
        onClick={() => {
          btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login");
        }}
      >
        {btnNameReact}
      </button>

      <div className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</div>
      </div>
    </div>
  );
};

export default Header;

/*  { <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                        <li>Cart</li>
                    </ul>
                </div>
                {
                    (isLoggedIn) ? (
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    )
                }
        </div>
    );
};

export default Header; */
