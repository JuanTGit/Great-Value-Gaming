import Navbar from "./Navbar";
import { useRef } from "react";
import { useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "../Layout.css";

function Layout({ children }) {
	const location = useLocation();
	const nodeRef = useRef(null);

	return(
		<div className="main-layout">
			<Navbar />
			<div className="content-area">
				<SwitchTransition mode="out-in">
					<CSSTransition key={location.pathname} classNames="bounce" timeout={300} unmountOnExit nodeRef={nodeRef}>
						<div className="layout-children" ref={nodeRef}>{children}</div>
					</CSSTransition>
				</SwitchTransition>
			</div>
	  	</div>
	);
};

export default Layout;