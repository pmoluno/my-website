import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./images/apple-touch-icon.png" style={{width: "50px", border: "2px solid #fff"}} alt="MP" /></a>
            <ThemeToggle />
        </div>
        </nav>
    );
    }