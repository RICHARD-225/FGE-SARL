import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const BtpGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Fondation immeuble',
      category: 'Construction',
      image: '/assets/images/btp/chantier/fondationImeuble.jpeg',
    },
    {
      id: 2,
      title: 'Chantier villa',
      category: 'Construction',
      image: '/assets/images/btp/chantier/villard .jpeg',
    },
    {
      id: 3,
      title: 'Duplex en construction',
      category: 'Construction',
      image: '/assets/images/btp/chantier/duplex.jpeg',
    },
    {
      id: 4,
      title: 'Immeuble en chantier',
      category: 'Construction',
      image: '/assets/images/btp/chantier/projetimeuble1.jpeg',
    },
    {
      id: 5,
      title: 'Rénovation bâtiment',
      category: 'Rénovation',
      image: '/assets/images/btp/chantier/renovationBatiment.jpeg',
    },
    {
      id: 6,
      title: 'Route en construction',
      category: 'Travaux Publics',
      image: '/assets/images/btp/chantier/route.jpeg',
    },
    {
      id: 7,
      title: 'Pavage professionnel',
      category: 'Aménagement',
      image: '/assets/images/btp/chantier/pavage.jpeg',
    },
    {
      id: 8,
      title: 'Lotissement',
      category: 'Lotissement',
      image: '/assets/images/btp/chantier/lotissement.jpeg',
    },
    {
      id: 9,
      title: 'Assainissement',
      category: 'Infrastructure',
      image: '/assets/images/btp/chantier/assairnissement.jpeg',
    },
    {
      id: 10,
      title: 'Caméra de surveillance',
      category: 'Sécurité',
      image: '/assets/images/btp/chantier/camera2.jpeg',
    },
    {
      id: 11,
      title: 'Installation technique 1',
      category: 'Équipement',
      image: '/assets/images/btp/chantier/instalation1.jpeg',
    },
    {
      id: 12,
      title: 'Installation technique 2',
      category: 'Équipement',
      image: '/assets/images/btp/chantier/instalation2.jpeg',
    },
    {
      id: 13,
      title: 'Installation technique 3',
      category: 'Équipement',
      image: '/assets/images/btp/chantier/instalation3.jpeg',
    },
    {
      id: 14,
      title: 'Installation technique 4',
      category: 'Équipement',
      image: '/assets/images/btp/chantier/instalation4.jpeg',
    },
    {
      id: 15,
      title: 'Installation technique',
      category: 'Équipement',
      image: '/assets/images/btp/chantier/intalation.jpeg',
    },
    {
      id: 16,
      title: 'Ferme',
      category: 'Autre',
      image: '/assets/images/btp/chantier/ferme .jpeg',
    },
    {
      id: 17,
      title: 'Autre chantier',
      category: 'Autre',
      image: '/assets/images/btp/chantier/autre.jpeg',
    },
  ];

  const categories = [
    'Tous',
    'Construction',
    'Travaux Publics',
    'Aménagement',
    'Lotissement',
    'Infrastructure',
    'Sécurité',
    'Équipement',
    'Rénovation',
    'Autre',
  ];

  const filteredItems =
    selectedCategory === 'Tous'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/images/btp/photoChantier.jpg)', opacity: 0.35 }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Photos de Chantiers</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Galerie de nos chantiers et réalisations en cours
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

      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-lg">{item.title}</p>
                      <p className="text-sm text-orange-300">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-orange-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="text-white text-center mt-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-orange-400">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BtpGallery;