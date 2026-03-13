import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import BtpDevisForm from '../../components/BtpDevisForm';

const BtpDevis = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      details: ['+225 27 33 74 63 67', '07 78 02 08 03'],
      action: 'tel:+2252733746367',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['fraternitegroupeentreprise@gmail.com'],
      action: 'mailto:fraternitegroupeentreprise@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      details: ['Bouaké et Yamoussoukro, Côte d\'Ivoire'],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/btp/devis.jpeg)', opacity: 0.35 }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Demander un Devis BTP</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Obtenez un devis gratuit et personnalisé pour votre projet de construction
            </p>
          </motion.div>
        </div>
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl text-orange-500 mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {info.action && idx === 0 ? (
                        <a
                          href={info.action}
                          className="hover:text-orange-500 transition-colors font-semibold"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <BtpDevisForm />
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
            className="bg-blue-50 border border-blue-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">À propos de nos devis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Délais de réponse</h3>
                <p className="text-gray-600">
                  Notre équipe examine votre demande et vous contacte dans un délai de 24 à 48 heures pour discuter de votre projet en détail.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Devis gratuit</h3>
                <p className="text-gray-600">
                  Tous nos devis sont entièrement gratuits et sans engagement. Nous vous fournirons une estimation détaillée après étude de votre projet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Visite du chantier</h3>
                <p className="text-gray-600">
                  Nos experts se rendront sur place si nécessaire pour une évaluation précise de vos besoins et une meilleure compréhension de votre projet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Suivi de projet</h3>
                <p className="text-gray-600">
                  Une fois le marché signé, nous assurons un suivi régulier de votre chantier et vous tenons informé de l'avancement des travaux.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BtpDevis;

