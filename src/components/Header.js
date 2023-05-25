import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <h1>아잉</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/"></Route>
                    <Route path="/"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Header;