import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  photo: string;
  delay?: number;
}

const TestimonialCard = ({ name, role, comment, rating, photo, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'text-orange-500' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">"{comment}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
