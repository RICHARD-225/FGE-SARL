import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BtpProjectCard from '../../components/BtpProjectCard';

const BtpProjects = () => {
  const projects = [
    {
      title: 'Villa moderne Bouaké',
      description: "Construction d'une villa moderne de 400 m² avec finitions premium",
      category: 'Construction',
      image: '/assets/images/btp/projets/villard .jpeg',
    },
    {
      title: 'Duplex Yamoussoukro',
      description: "Réalisation d'un duplex 6 pièces avec garage et jardin",
      category: 'Construction',
      image: '/assets/images/btp/projets/duplex.jpeg',
    },
    {
      title: 'Aménagement route régionale',
      description: "Réhabilitation complète d'une route régionale de 15 km",
      category: 'Travaux Publics',
      image: '/assets/images/btp/projets/route.jpeg',
    },
    {
      title: 'Pavage cour administrative',
      description: "Pavage professionnel d'une cour administrative de 2000 m²",
      category: 'Aménagement',
      image: '/assets/images/btp/projets/pavage.jpeg',
    },
    {
      title: 'Immeuble collectif',
      description: "Construction d'un immeuble R+5 avec ascenseur et parking",
      category: 'Construction',
      image: '/assets/images/btp/projets/projetimeuble1.jpeg',
    },
    {
      title: 'Lotissement résidentiel',
      description: "Création et viabilisation d'un lotissement de 45 parcelles",
      category: 'Lotissement',
      image: '/assets/images/btp/projets/lotissement .jpeg',
    },
    {
      title: 'Rénovation bâtiment commercial',
      description: "Réhabilitation complète d'un bâtiment commercial de 800 m²",
      category: 'Rénovation',
      image: '/assets/images/btp/projets/renovationBatiment.jpeg',
    },
    {
      title: "Ouvrages d'assainissement",
      description: "Construction de fosses et caniveaux dans une agglomération urbaine",
      category: 'Infrastructure',
      image: '/assets/images/btp/projets/assairnissement.jpeg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/images/btp/projet.jpeg)',
            opacity: 0.35,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Projets Réalisés</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les réalisations qui témoignent de notre expertise et de notre savoir-faire
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <BtpProjectCard key={index} {...project} delay={index * 0.05} />
            ))}
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
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Prêt pour votre projet ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour obtenir un devis pour votre projet BTP
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

export default BtpProjects;