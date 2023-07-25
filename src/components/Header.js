const Title = () => (
    <a href="#">
    <img className="logo" src="https://tse2.mm.bing.net/th?id=OIP.Z9OuNKsSytC-sB-8qHyT7gHaHa&pid=Api&P=0&h=180" alt="logo"></img>
    </a>
);


const Header = () => {
    return (
        <div className="header">
            <Title />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
        </div>
    );
};

export default Header;