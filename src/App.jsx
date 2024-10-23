import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Views/Home';
import Games from './Views/Games';
import './index.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/games" element={<Games />} />
				<Route path="*" element={<Navigate to="/home" />} /> {/* Default route */}
			</Routes>
		</Router>
	);
}

export default App;
