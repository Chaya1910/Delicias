import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';

import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
    <a href="/">
    <img className="h-24 p-2" src={Logo} alt="logo"></img>
    </a>
);
 

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="flex justify-between">
            <Title />
                <div className="nav-items">
                <ul className='flex py-10 '>
          <li className='px-2'>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className='px-2'>
            <Link to="/about">About Us</Link>
          </li>
          <li className='px-2'>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className='px-2'>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className='px-2'>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
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