import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SignInBox from "./Components/SignInBox";
import AboutPage from "./Components/AboutPage";
import PartnersPage from "./Components/PartnersPage";
import SignupPage from "./Components/SignupPage";


function App() {
  return (
    <Box >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hem" element={<HomePage />} />
          <Route path="/Om Oss" element={<AboutPage />} />
          <Route path="/Samarbetspartners" element={<PartnersPage />} />
          <Route path="/Bli Medlem" element={<SignupPage />} />
          <Route path="/Logga In" element={<SignInBox />} />
        </Routes>
      </Router>
    </Box>

  );
}

export default App;
