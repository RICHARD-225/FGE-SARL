import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/images/logo.jpeg" 
                alt="Fraternité Groupe Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-bold">Fraternité Groupe</span>
                <span className="text-xs text-orange-500">Entreprise SARL</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance en Côte d'Ivoire pour tous vos besoins professionnels.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Informatique
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Librairie Papeterie
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Imprimerie
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Sécurité électronique
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Agence Immobilière
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-orange-500" />
                <span>+225 27 33 74 63 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-orange-500" />
                <span>07 78 02 08 03</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-500" />
                <a 
                  href="mailto:fraternitegroupeentreprise@gmail.com"
                  className="break-all hover:text-orange-500 transition-colors cursor-pointer"
                >
                  fraternitegroupeentreprise@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <a
                  href="https://maps.app.goo.gl/ki3kCcmoByn4Ly3s5?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  AHOUGNASSOU 2 - PREMIER CHARBON, Bouaké, Côte d'Ivoire
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horaires</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <FaClock className="text-orange-500 mt-1" />
                <div>
                  <p>Lun - Sam: 07h30 - 19h00</p>
                  <p>Dimanche: 11h00 - 18h00</p>
                  <p>Jours fériés: 08h30 - 17h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link to="/btp" className="text-gray-400 hover:text-orange-500 transition-colors">
              BTP
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://web.facebook.com/FRATERNITEGROUPENTREPRISE/?_rdc=1&_rdr"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>&copy; 2024 Fraternité Groupe Entreprise SARL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;