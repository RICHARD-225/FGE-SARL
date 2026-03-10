import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '2250778020803';
  const message = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur vos services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
      aria-label="Contactez-nous sur WhatsApp"
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          '0 0 0 0 rgba(34, 197, 94, 0.7)',
          '0 0 0 10px rgba(34, 197, 94, 0)',
          '0 0 0 0 rgba(34, 197, 94, 0)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <FaWhatsapp className="text-3xl" />
    </motion.a>
  );
};

export default WhatsAppButton;
