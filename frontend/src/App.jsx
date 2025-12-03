import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProblemReport from './pages/ProblemReport';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScheduleService from './pages/ScheduleService';
import BackToTop from './components/BackToTop';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-problem" element={<ProblemReport />} />
        <Route path="/schedule-service" element={<ScheduleService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
