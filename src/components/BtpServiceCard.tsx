import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BtpServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  services: string[];
  image: string;
  delay?: number;
}

const BtpServiceCard = ({
  icon,
  title,
  description,
  services,
  image,
  delay = 0,
}: BtpServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-white p-3 rounded-lg text-3xl">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-slate-900 mb-2">Prestations :</h4>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span className="text-gray-700 text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default BtpServiceCard;
