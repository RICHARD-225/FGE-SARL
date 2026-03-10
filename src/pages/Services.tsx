import { motion } from 'framer-motion';
import { FaLaptop, FaBook, FaPrint, FaShieldAlt, FaHome } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const allServices = [
    {
      icon: <FaLaptop />,
      title: 'Informatique',
      description: 'Solutions informatiques complètes pour entreprises et particuliers. Nous offrons des services de maintenance, installation et conseil pour tous vos besoins technologiques.',
      services: [
        'Réparation ordinateurs et périphériques',
        'Installation et configuration de logiciels',
        'Protection antivirus et cybersécurité',
        'Vente d\'ordinateurs et accessoires',
        'Formation informatique',
        'Maintenance préventive et corrective',
        'Réseau et connectivité',
        'Sauvegarde et récupération de données',
      ],
      image: '/assets/images/services/informatique.jpeg',
    },
    {
      icon: <FaBook />,
      title: 'Librairie Papeterie',
      description: 'Votre référence pour tous les articles scolaires et bureautiques. Un large choix de produits de qualité pour étudiants, professionnels et entreprises.',
      services: [
        'Fournitures scolaires complètes',
        'Articles de bureau professionnels',
        'Matériel pédagogique et didactique',
        'Livres scolaires et parascolaires',
        'Cahiers et blocs-notes',
        'Instruments d\'écriture de qualité',
        'Classement et archivage',
        'Cartouches et consommables',
      ],
      image: '/assets/images/services/papeterier.jpg',
    },
    {
      icon: <FaPrint />,
      title: 'Imprimerie',
      description: 'Services d\'impression professionnelle pour tous vos supports de communication. Qualité, rapidité et créativité pour vos projets publicitaires.',
      services: [
        'Impression T-shirts personnalisés',
        'Flyers et brochures publicitaires',
        'Badges professionnels',
        'Cartes de visite premium',
        'Affiches et posters grand format',
        'Supports publicitaires variés',
        'Impression sur objets promotionnels',
        'Design graphique et création',
      ],
      image: '/assets/images/services/imprimerie.jpeg',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Sécurité Électronique',
      description: 'Solutions de sécurité modernes pour protéger vos biens et votre famille. Installation professionnelle et maintenance garantie.',
      services: [
        'Caméras de surveillance HD/4K',
        'Vidéosurveillance IP',
        'Maintenance des installations',
        'Monitoring et support 24/7',
      ],
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <FaHome />,
      title: 'Agence Immobilière',
      description: 'Votre partenaire immobilier de confiance. Nous vous accompagnons dans tous vos projets immobiliers avec professionnalisme et transparence.',
      services: [
        'Vente de terrains viabilisés',
        'Gestion locative complète et transparente (residential et commercial)',
        'Conseil en investissement immobilier',
        'Estimation et expertise immobilière',
        'Transaction d\'achat et vente',
        'Recherche de biens personnalisée',
      ],
      image: '/assets/images/services/imobiliers.jpeg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services professionnels adaptés à vos besoins
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
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
            <h2 className="text-4xl font-bold mb-6">Besoin d'un devis personnalisé ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2252733746367"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Appelez-nous
              </a>
              <a
                href="mailto:fraternitegroupeentreprise@gmail.com"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Écrivez-nous
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
