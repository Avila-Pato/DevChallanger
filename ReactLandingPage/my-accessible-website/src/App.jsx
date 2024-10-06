import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
// ... other imports
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar /> 
            <DarkModeToggle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                {/* ... other routes */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;