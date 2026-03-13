import { useState } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '2250778020803';

const BtpDevisForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatBudget = () => {
    const digits = formData.budget.replace(/[^\d]/g, '');
    if (digits.length > 0) {
      return `${digits} FCFA`;
    }
    const trimmed = formData.budget.trim();
    if (trimmed.length > 0) {
      return trimmed;
    }
    return 'Non précisé';
  };

  const buildWhatsappMessage = () => {
    const lines = [
      'Bonjour, je souhaite établir un devis Bâtiment/BTP.',
      '',
      `Nom: ${formData.name}`,
      `Téléphone: ${formData.phone || 'Non précisé'}`,
      `Email: ${formData.email}`,
      `Ville: ${formData.city || 'Non précisée'}`,
      `Type de projet: ${formData.projectType || 'Non précisé'}`,
      `Budget (FCFA): ${formatBudget()}`,
      '',
      'Détails du projet:',
      '',
      formData.message,
    ];

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setIsError(false);

    const message = buildWhatsappMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setSubmitMessage('Redirection vers WhatsApp...');

    if (typeof window !== 'undefined') {
      window.location.href = url;
      return;
    }

    setIsError(true);
    setSubmitMessage("Impossible d'ouvrir WhatsApp. Veuillez réessayer.");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Demande de devis</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            placeholder="Votre téléphone"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            Ville
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            placeholder="Bouaké, Yamoussoukro..."
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Sélectionnez</option>
            <option value="Construction">Construction</option>
            <option value="Travaux publics">Travaux publics</option>
            <option value="Lotissement">Lotissement</option>
            <option value="Rénovation">Rénovation</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget estimé
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            placeholder="Ex: 10000000 FCFA"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Détails du projet
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Décrivez votre projet..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Ouverture de WhatsApp...' : 'Envoyer via WhatsApp'}
      </button>

      {submitMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 px-4 py-3 rounded-lg border ${
            isError
              ? 'bg-red-100 border-red-400 text-red-700'
              : 'bg-green-100 border-green-400 text-green-700'
          }`}
        >
          {submitMessage}
        </motion.div>
      )}
    </motion.form>
  );
};

export default BtpDevisForm;