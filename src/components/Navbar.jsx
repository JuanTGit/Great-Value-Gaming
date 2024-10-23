import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaGamepad, FaServicestack, FaEnvelope, FaUserAlt } from "react-icons/fa";

function Navbar() {
	const [collapsed, setCollapsed] = useState(false);

	const toggleNavbar = () => {
		setCollapsed(!collapsed);
	};

	return(
		<nav className={`vertical-navbar ${collapsed ? 'collapsed' : ''}`}>
			<div className="navbar-logo">
				<img src="/gvlogo.png" alt="Logo" />
			</div>
	
	
			<ul className="navbar-links">
				<li>
					<Link to="/home">
						<FaHome className="icon" />
						{!collapsed && <span>Home</span>} {/* Show text only when expanded */}
					</Link>
				</li>
				<li>
					<Link to="/games">
						<FaGamepad className="icon" />
						{!collapsed && <span>Games</span>}
					</Link>
				</li>
				<li>
					<Link to="/services">
						<FaServicestack className="icon" />
						{!collapsed	&& <span>Services</span>}
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<FaEnvelope className="icon" />
						{!collapsed && <span>Contact</span>}
					</Link>
				</li>
			</ul>
	
			<button className="collapse-btn" onClick={toggleNavbar}>
				{collapsed ? '>' : '<'} {/* Icon changes based on collapse state */}
			</button>

			<div className="navbar-user">
				<Link to="/login" className="login-btn">
					<FaUserAlt className="icon" />
					{!collapsed && <span>Login</span>}
				</Link>
			</div>
	  </nav>  
	)
}

export default Navbar;