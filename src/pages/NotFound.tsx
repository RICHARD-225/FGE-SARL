import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4"
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
        </motion.div>

        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <Link
          to="/"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Retourner à l'accueil
        </Link>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Link
            to="/services"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Nos Services
          </Link>
          <Link
            to="/galerie"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Galerie
          </Link>
          <Link
            to="/avis"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Avis Clients
          </Link>
          <Link
            to="/contact"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
