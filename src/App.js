import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SignInBox from "./Components/SignInBox";
import AboutPage from "./Components/AboutPage";
import PartnersPage from "./Components/PartnersPage";
import SignupPage from "./Components/SignupPage";
import Footer from "./Components/Footer";
import Calendar from "./Components/Calendar";
import MemberProfile from "./MemberProfile";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/MemberProfile' || '/Calendar';

  return (
    <Box >
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hem" element={<HomePage />} />
          <Route path="/Om Oss" element={<AboutPage />} />
          <Route path="/Samarbetspartners" element={<PartnersPage />} />
          <Route path="/Bli Medlem" element={<SignupPage />} />
          <Route path="/Logga In" element={<SignInBox />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/MemberProfile" element={<MemberProfile />} />
        </Routes>
      <Footer />
    </Box>

  );
}

export default App;
