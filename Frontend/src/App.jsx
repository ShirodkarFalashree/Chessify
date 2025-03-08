import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import TutorialsPage from "./pages/TutorialsPage";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="tutorials" element={<TutorialsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;