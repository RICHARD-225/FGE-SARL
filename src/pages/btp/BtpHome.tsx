import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHardHat, FaTools, FaClipboard, FaImages } from 'react-icons/fa';

const BtpHome = () => {
  const navigationCards = [
    {
      icon: <FaHardHat />,
      title: 'Nos services BTP',
      description: 'Découvrez toutes nos activités en génie civil et travaux publics',
      link: '/btp/services',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaClipboard />,
      title: 'Demander un devis',
      description: 'Obtenez un devis gratuit pour votre projet',
      link: '/btp/devis',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FaTools />,
      title: 'Projets réalisés',
      description: 'Explorez nos réalisations et références',
      link: '/btp/projets',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <FaImages />,
      title: 'Photos de chantiers',
      description: 'Galerie photos de nos chantiers et réalisations',
      link: '/btp/chantiers',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/images/btp/accueilBtp.jpeg)',
            opacity: 0.3,
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Génie Civil & BTP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Solutions complètes en construction et travaux publics
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl mb-12 text-gray-400"
          >
            Expert en construction de maisons, duplex, routes et aménagements à Bouaké et Yamoussoukro
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              to="/btp/services"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      <section className="py-10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/btp/services"
              className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Services BTP
            </Link>
            <Link
              to="/btp/projets"
              className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Projets réalisés
            </Link>
            <Link
              to="/btp/chantiers"
              className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Photos chantiers
            </Link>
            <Link
              to="/btp/devis"
              className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nos activités BTP
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fraternité Groupe Entreprise propose des solutions complètes en génie civil et travaux publics.
              Avec une expertise reconnue à Bouaké et Yamoussoukro, nous nous engageons à réaliser vos projets
              avec professionnalisme et qualité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {navigationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={card.link}
                  className={`block h-full bg-gradient-to-br ${card.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl mt-2">{card.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                      <p className="text-white/90">{card.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vous avez un projet BTP ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez notre équipe pour discuter de vos besoins en construction
            </p>
            <Link
              to="/btp/devis"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Demander un devis
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BtpHome;