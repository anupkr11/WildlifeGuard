import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Wildlife from "./pages/Wildlife";
import JoinTeam from "./pages/JoinTeam";
import Contact from "./pages/Contact";
import Programs from "./pages/Program";
import ProgramDetails from "./pages/ProgramDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/join-team" element={<JoinTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
