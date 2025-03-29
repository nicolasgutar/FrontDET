import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AdminPage from "./pages/AdminPage.jsx";

function AppRouter() {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/admin/123" element={<AdminPage />} />
            </Routes>
    );
}

export default AppRouter;