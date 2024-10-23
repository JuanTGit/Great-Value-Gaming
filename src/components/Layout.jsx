import Navbar from "./Navbar";
import "../Layout.css";

function Layout({ children }) {
	return(
		<div className="main-layout">
			<Navbar />
			<div className="content-area">
				{children}
			</div>
	  	</div>
	);
};

export default Layout;