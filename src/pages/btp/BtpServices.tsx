import { motion } from 'framer-motion';
import { FaHardHat, FaRoad, FaMapPin, FaBuilding, FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BtpServiceCard from '../../components/BtpServiceCard';

const BtpServices = () => {
  const services = [
    {
      icon: <FaHardHat />,
      title: 'Génie Civil et BTP',
      description: 'Construction professionnelle de bâtiments résidentiels et commerciaux',
      services: [
        'Construction de maisons et villas modernes',
        'Construction de duplex et immeubles',
        'Travaux de gros œuvre (fondations, béton armé, charpente)',
        'Travaux de second œuvre (revêtements, finitions)',
        'Réhabilitation et rénovation de bâtiments',
        'Construction d\'ouvrages de génie civil',
        'Suivi de chantier et contrôle de qualité',
        'Respect des normes de construction',
      ],
      image: '/assets/images/btp/services/genicivilbtp.jpeg',
    },
    {
      icon: <FaRoad />,
      title: 'Travaux Publics',
      description: 'Infrastructure et aménagement routier de qualité',
      services: [
        'Construction et réhabilitation de routes',
        'Construction de pistes et chemins',
        'Réalisation de caniveaux et fossés',
        'Ouvrages d\'assainissement et drainage',
        'Pavage de cours et parkings',
        'Aménagement urbain et routier',
        'Maintenance routière et réparation',
        'Signalisation et marquage routier',
      ],
      image: '/assets/images/btp/services/travauxpublic.jpeg',
    },
    {
      icon: <FaMapPin />,
      title: 'Lotissement et Aménagement',
      description: 'Développement foncier et viabilisation de terrains',
      services: [
        'Étude et réalisation de projets de lotissement',
        'Morcellement de terrains viabilisés',
        'Viabilisation complète de parcelles',
        'Aménagement et préparation de terrains',
        'Plan de masse et limitations',
        'Infrastructure d\'accès et réseaux',
        'Gestion des permis et autorisations',
        'Conseil en développement foncier',
      ],
      image: '/assets/images/btp/services/lotissement.jpeg',
    },
    {
      icon: <FaBuilding />,
      title: 'Promotion Immobilière',
      description: 'Achat, vente et gestion de biens immobiliers',
      services: [
        'Achat et vente de terrains viabilisés',
        'Construction de logements résidentiels',
        'Gestion et location de biens immobiliers',
        'Estimation et expertise immobilière',
        'Suivi administratif et juridique',
        'Accompagnement des investisseurs',
        'Conseils en investissement immobilier',
        'Transaction immobilière sécurisée',
      ],
      image: '/assets/images/btp/services/promotionimobiliere.jpeg',
    },
    {
      icon: <FaBox />,
      title: 'Fourniture et Services Techniques',
      description: 'Support technique et fourniture de matériaux',
      services: [
        'Études techniques et conception de plans',
        'Supervision et suivi de chantiers',
        'Contrôle de qualité et inspection',
        'Fourniture de matériaux de construction',
        'Location de matériaux de chantier',
        'Conseils en solutions constructives',
        'Documentation technique et rapports',
        'Formation du personnel chantier',
      ],
      image: '/assets/images/btp/services/fournitureTechnique.jpeg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/btp/accueilBtp.jpeg)', opacity: 0.35 }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services BTP</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services en génie civil et travaux publics
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BtpServiceCard key={index} {...service} delay={index * 0.1} />
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
            <h2 className="text-4xl font-bold mb-6">Intéressé par nos services ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour discuter de votre projet BTP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2252733746367"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Appelez-nous
              </a>
              <Link
                to="/btp/devis"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BtpServices;




