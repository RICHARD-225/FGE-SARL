import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'T-shirt personnalisé entreprise',
      category: 'Imprimerie',
      image: '/assets/images/galerie/tishirt.jpeg',
    },
    {
      id: 2,
      title: 'Flyers publicitaires',
      category: 'Imprimerie',
      image: '/assets/images/galerie/flayers.jpeg',
    },
    {
      id: 3,
      title: 'Installation caméra surveillance',
      category: 'Sécurité',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Fournitures scolaires',
      category: 'Papeterie',
      image: '/assets/images/galerie/fourniture.jpeg',
    },
    {
      id: 5,
      title: 'Réparation ordinateur',
      category: 'Informatique',
      image: '/assets/images/galerie/Reparation.jpg',
    },
    {
      id: 6,
      title: 'Cartes de visite premium',
      category: 'Imprimerie',
      image: '/assets/images/galerie/carteVisite.jpeg',
    },
    {
      id: 7,
      title: 'Système alarme intelligent',
      category: 'Sécurité',
      image: 'https://images.pexels.com/photos/7055507/pexels-photo-7055507.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Articles de bureau',
      category: 'Papeterie',
      image: '/assets/images/galerie/articleBureau.jpeg',
    },
    {
      id: 9,
      title: 'Accessoires informatiques',
      category: 'Informatique',
      image: '/assets/images/galerie/accessoiresInformatique.jpeg',
    },
    {
      id: 10,
      title: 'Badges professionnels',
      category: 'Imprimerie',
      image: '/assets/images/galerie/badge.jpeg',
    },
    {
      id: 11,
      title: 'Panneaux solaires',
      category: 'Sécurité',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 12,
      title: 'Livres et cahiers',
      category: 'Papeterie',
      image: '/assets/images/galerie/livrreCahier.jpeg',
    },
  ];

  const categories = ['Tous', 'Imprimerie', 'Sécurité', 'Papeterie', 'Informatique'];

  const filteredItems =
    selectedCategory === 'Tous'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Notre Galerie</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos réalisations et nos produits en images
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
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

export default Gallery;
