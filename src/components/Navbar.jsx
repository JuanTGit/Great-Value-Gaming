
function Navbar() {
	return(
		<>
			<nav className="vertical-navbar">
				<div className="navbar-logo">
				<img src="/images/logo.png" alt="Logo" />
				</div>
				<ul className="navbar-links">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#contact">Contact</a></li>
				</ul>
				<div className="navbar-user">
				<a href="#login" className="login-btn">Login</a>
				</div>
			</nav>
		</>
	)
}

export default Navbar;