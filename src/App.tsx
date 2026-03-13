import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BtpHome from './pages/btp/BtpHome';
import BtpServices from './pages/btp/BtpServices';
import BtpProjects from './pages/btp/BtpProjects';
import BtpGallery from './pages/btp/BtpGallery';
import BtpDevis from './pages/btp/BtpDevis';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const routes: { [key: string]: string } = {
      '/': 'Accueil - Fraternité Groupe Entreprise SARL',
      '/services': 'Nos Services - Fraternité Groupe Entreprise SARL',
      '/galerie': 'Galerie - Fraternité Groupe Entreprise SARL',
      '/avis': 'Avis Clients - Fraternité Groupe Entreprise SARL',
      '/contact': 'Contact - Fraternité Groupe Entreprise SARL',
      '/btp': 'BTP - Fraternité Groupe Entreprise SARL',
      '/btp/services': 'Services BTP - Fraternité Groupe Entreprise SARL',
      '/btp/devis': 'Devis BTP - Fraternité Groupe Entreprise SARL',
      '/btp/projets': 'Projets BTP - Fraternité Groupe Entreprise SARL',
      '/btp/chantiers': 'Chantiers BTP - Fraternité Groupe Entreprise SARL',
    };

    document.title = routes[location.pathname] || 'Fraternité Groupe Entreprise SARL';
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <TitleManager />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/avis" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/btp" element={<BtpHome />} />
            <Route path="/btp/services" element={<BtpServices />} />
            <Route path="/btp/devis" element={<BtpDevis />} />
            <Route path="/btp/projets" element={<BtpProjects />} />
            <Route path="/btp/chantiers" element={<BtpGallery />} />
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