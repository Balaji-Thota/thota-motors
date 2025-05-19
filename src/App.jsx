import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProblemReport from './pages/ProblemReport';
import BackToTop from './components/BackToTop';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-problem" element={<ProblemReport />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
