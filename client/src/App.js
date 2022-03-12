import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
