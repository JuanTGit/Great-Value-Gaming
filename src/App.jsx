import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Views/Home';
import Games from './Views/Games';
import Contact from './Views/Contact';
import Layout from './components/Layout';
import Services from './Views/Services';


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Layout><Home /></Layout>} />
				<Route path="/games" element={<Layout><Games /></Layout>} />
				<Route path="/services" element={<Layout><Services /></Layout>} />
				<Route path="/contact" element={<Layout><Contact /></Layout>} />
				<Route path="*" element={<Layout><Navigate to="/home" /></Layout>} /> {/* Default route */}
			</Routes>
		</Router>
	);
}

export default App;
