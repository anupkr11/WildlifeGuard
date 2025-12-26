import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Wildlife from "./pages/Wildlife";

function App() {

  return (
    <>
       <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wildlife" element={<Wildlife />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
