import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import TutorialsPage from "./pages/TutorialsPage";
import Game from "./pages/Game";
import CustomBoard from "./pages/CustomBoard";
import Playlist from "./pages/Playlist";
import ReadAndLearn from "./pages/ReadAndLearn";

function App() {
  return (
    <Router>
      <ToastContainer /> {/* Add this to enable toast notifications */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="tutorials" element={<TutorialsPage />} />
          <Route path="multiplayer" element={<Game />} />
          <Route path="custom-board" element={<CustomBoard />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="read-and-learn" element={<ReadAndLearn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
