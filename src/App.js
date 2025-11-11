import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import your individual pages
import Home from './Components/Home';
import Faculty from './Components/Faculty';
import About from './Components/About';
import PhotoGallery from './Components/PhotoGallery';
import VideoGallery from './Components/VideoGallery';
import Event from './Components/Event';
import './App.css';  // or './index.css' or wherever you put it

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/about" element={<About />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
