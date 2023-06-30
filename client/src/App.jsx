import { Route, Routes, Navigate } from "react-router-dom"
import { Cloudinary } from "@cloudinary/url-gen";

import MapPage from "./pages/Map Page/Map Page"

import './App.css';

function App() {

    const cld = new Cloudinary({ cloud: { cloudName: 'dujlotjg3' } });

    return (
        <main>
            <Routes>
                <Route index element={<Navigate to="/map" replace={true} />} />
                <Route path="/map" element={<MapPage />} />
            </Routes>
        </main>
    );
}

export default App;