import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    const updateTitle = () => {
      const routes: { [key: string]: string } = {
        '/': 'Accueil - Fraternité Groupe Entreprise SARL',
        '/services': 'Nos Services - Fraternité Groupe Entreprise SARL',
        '/galerie': 'Galerie - Fraternité Groupe Entreprise SARL',
        '/avis': 'Avis Clients - Fraternité Groupe Entreprise SARL',
        '/contact': 'Contact - Fraternité Groupe Entreprise SARL',
      };

      const currentPath = window.location.pathname;
      document.title = routes[currentPath] || 'Fraternité Groupe Entreprise SARL';
    };

    updateTitle();
    window.addEventListener('popstate', updateTitle);
    return () => window.removeEventListener('popstate', updateTitle);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/avis" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
