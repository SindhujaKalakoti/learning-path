
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';
import ContactUsPage from './pages/ContactUsPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
