import { Link } from "react-router-dom";

function Navbar() {
	return(
		<>
			<nav className="vertical-navbar">
				<div className="navbar-logo">
					<img src="/images/logo.png" alt="Logo" />
				</div>
				<ul className="navbar-links">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/games">Games</Link></li>
					<li><Link to="/services">Services</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
				<div className="navbar-user">
					<Link to="/login" className="login-btn">Login</Link>
				</div>
			</nav>
		</>
	)
}

export default Navbar;