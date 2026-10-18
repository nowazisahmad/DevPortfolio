import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fafbfc] text-gray-900 dark:bg-[#08090d] dark:text-gray-100 flex flex-col justify-between transition-colors duration-300 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
