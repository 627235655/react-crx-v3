import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '@/popup/pages/login';
import Home from '@/popup/pages/home';
import './popup.less';
function Popup() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    );
}

export default Popup;
