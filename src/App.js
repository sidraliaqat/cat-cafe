import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
