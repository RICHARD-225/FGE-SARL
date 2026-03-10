import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kouassi Michel',
      role: 'Directeur PME',
      comment: 'Service impeccable ! L\'équipe est professionnelle et réactive. Leurs solutions informatiques ont transformé notre entreprise. Je recommande vivement leurs services.',
      rating: 5,
      photo: '/assets/images/testimonials/kouassiMichel.jpeg',
    },
    {
      name: 'Adjoua Marie',
      role: 'Commerçante',
      comment: 'Excellente qualité d\'impression ! Mes flyers et cartes de visite sont magnifiques. Le service est rapide et le prix très compétitif. Je recommande vivement.',
      rating: 5,
      photo: '/assets/images/testimonials/adjouaMarie.jpeg',
    },
    {
      name: 'Yao Patrick',
      role: 'Chef d\'entreprise',
      comment: 'Très satisfait des systèmes de sécurité installés. Je me sens en sécurité maintenant. Service après-vente au top ! L\'équipe est disponible 24/7.',
      rating: 5,
      photo: '/assets/images/testimonials/yaoPatrick.jpeg',
    },
    {
      name: 'Koné Aminata',
      role: 'Enseignante',
      comment: 'Je trouve toutes mes fournitures scolaires chez eux. Le choix est varié et la qualité est au rendez-vous. Les prix sont abordables et le personnel est très aimable.',
      rating: 5,
      photo: '/assets/images/testimonials/koneAminata.jpeg',
    },
    {
      name: 'Diallo Mamadou',
      role: 'Promoteur Immobilier',
      comment: 'Leur service immobilier est exceptionnel. Ils m\'ont aidé à trouver le terrain parfait pour mon projet. Très professionnels et transparents dans toutes les démarches.',
      rating: 5,
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Bamba Fatoumata',
      role: 'Gérante de boutique',
      comment: 'Les T-shirts personnalisés pour mon équipe sont de très bonne qualité. Le design est exactement ce que je voulais. Service client excellent, je reviendrai !',
      rating: 5,
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Traoré Ibrahim',
      role: 'Informaticien',
      comment: 'J\'achète tout mon matériel informatique chez eux. Produits de qualité et conseils professionnels. Les prix sont compétitifs et la livraison est rapide.',
      rating: 5,
      photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sangaré Mariam',
      role: 'Directrice d\'école',
      comment: 'Fournisseur fiable pour notre école. Livraison ponctuelle et produits conformes. La papeterie propose un excellent rapport qualité-prix pour les fournitures en gros.',
      rating: 5,
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Ouattara Seydou',
      role: 'Entrepreneur',
      comment: 'Installation de caméras impeccable. Le système fonctionne parfaitement et je peux surveiller mon entreprise à distance. Équipe technique très compétente.',
      rating: 5,
      photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '4.9/5', label: 'Note moyenne' },
    { number: '98%', label: 'Taux de satisfaction' },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Avis Clients</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nos services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-orange-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.05} />
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
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous aujourd'hui pour bénéficier de nos services de qualité
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
