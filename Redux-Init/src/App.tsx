
import './App.css'
import {Route, Routes} from "react-router-dom";
import RootLayout from "./components/RootLayout.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RootLayout />} />
                <Route path={'/profile'} element={<Profile />}/>
            </Routes>
        </div>
    )
}

export default App
