import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLaptop,
  FaBook,
  FaPrint,
  FaUsers,
  FaProjectDiagram,
  FaAward,
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      icon: <FaLaptop />,
      title: 'Informatique',
      description: 'Solutions informatiques complètes pour votre entreprise',
      services: [
        'Réparation ordinateurs et périphériques',
        'Installation logiciels et systèmes',
        'Protection antivirus et sécurité',
        'Vente accessoires informatiques',
      ],
      image: '/assets/images/services/informatique.jpeg',
    },
    {
      icon: <FaBook />,
      title: 'Librairie Papeterie',
      description: 'Tout pour vos besoins scolaires et bureautiques',
      services: [
        'Fournitures scolaires complètes',
        'Articles de bureau professionnels',
        'Matériel pédagogique',
        'Livres et cahiers',
      ],
      image: '/assets/images/services/papeterier.jpg',
    },
    {
      icon: <FaPrint />,
      title: 'Imprimerie',
      description: 'Impression professionnelle pour tous vos supports',
      services: [
        'Impression T-shirts personnalisés',
        'Flyers et brochures',
        'Badges et cartes de visite',
        'Supports publicitaires',
      ],
      image: '/assets/images/services/imprimerie.jpeg',
    },
  ];

  const testimonials = [
    {
      name: 'Kouassi Michel',
      role: 'Directeur PME',
      comment: 'Service impeccable ! L\'équipe est professionnelle et réactive. Leurs solutions informatiques ont transformé notre entreprise.',
      rating: 5,
      photo: '/assets/images/testimonials/kouassiMichel.jpeg',
    },
    {
      name: 'Adjoua Marie',
      role: 'Commerçante',
      comment: 'Excellente qualité d\'impression ! Mes flyers et cartes de visite sont magnifiques. Je recommande vivement.',
      rating: 5,
      photo: '/assets/images/testimonials/adjouaMarie.jpeg',
    },
    {
      name: 'Yao Patrick',
      role: 'Chef d\'entreprise',
      comment: 'Très satisfait des systèmes de sécurité installés. Je me sens en sécurité maintenant. Service après-vente au top !',
      rating: 5,
      photo: '/assets/images/testimonials/yaoPatrick.jpeg',
    },
  ];

  const stats = [
    { icon: <FaUsers />, number: '500+', label: 'Clients satisfaits' },
    { icon: <FaProjectDiagram />, number: '1000+', label: 'Projets réalisés' },
    { icon: <FaAward />, number: '5+', label: 'Années d\'expérience' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/images/services/imagehero.jpg)',
            opacity: 0.3,
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-4 mb-4">
              <img 
                src="/assets/images/logo.jpeg" 
                alt="Fraternité Groupe Logo" 
                className="w-20 h-20 rounded-xl object-cover shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Fraternité Groupe Entreprise
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Votre partenaire de confiance en Côte d'Ivoire (ville de Bouaké)
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl mb-12 text-gray-400"
          >
            Solutions complètes en Informatique, Papeterie, Imprimerie, Sécurité et Immobilier
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Découvrir nos services
            </Link>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Nous contacter
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
              Qui sommes-nous ?
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fraternité Groupe Entreprise SARL est une entreprise ivoirienne multi-services,
              fondée en octobre 2021 par M. BROU Marius Kouassi Picard qui en est le Directeur Général, 
              Nous combinons expertise, qualité et proximité pour vous offrir des solutions
              adaptées à vos projets (majoritairement dans la ville de Bouaké).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <div className="text-5xl text-orange-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nos Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes et professionnelles pour tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/services"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Voir tous nos services
            </Link>
          </motion.div>
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
              Témoignages Clients
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nous
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/avis"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Voir tous les avis
            </Link>
          </motion.div>
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
