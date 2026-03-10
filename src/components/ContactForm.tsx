import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Initialiser EmailJS une seule fois au montage du composant
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      console.log('🚀 Envoi EmailJS avec:', {
        SERVICE: EMAILJS_CONFIG.SERVICE_ID,
        TEMPLATE: EMAILJS_CONFIG.TEMPLATE_ID,
        DATA: {
          nom: formData.name,
          email: formData.email,
          message: formData.message,
        }
      });

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          nom: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      console.log('✅ Email envoyé avec succès:', response);
      setIsSubmitting(false);
      setSubmitMessage('✅ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error: any) {
      console.error('❌ Erreur EmailJS complète:', {
        message: error.message,
        status: error.status,
        text: error.text,
        fullError: error
      });
      
      setIsSubmitting(false);
      setIsError(true);
      
      // Message d'erreur détaillé basé sur le type d'erreur
      let errorMsg = '❌ Erreur ! Impossible d\'envoyer le message. ';
      
      if (error.status === 400) {
        errorMsg += 'Les variables du template ne correspondent pas. Vérifiez le dashboard EmailJS.';
      } else if (error.status === 401) {
        errorMsg += 'Clés EmailJS invalides. Vérifiez SERVICE_ID et PUBLIC_KEY.';
      } else if (error.status === 404) {
        errorMsg += 'Template ou Service introuvable. Vérifiez TEMPLATE_ID.';
      } else {
        errorMsg += 'Veuillez réessayer ou contacter directement.';
      }
      
      setSubmitMessage(errorMsg);

      setTimeout(() => {
        setSubmitMessage('');
      }, 7000);
    }
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
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>

      <div className="space-y-4">
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Votre message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-4 py-3 rounded-lg border ${
              isError
                ? 'bg-red-100 border-red-400 text-red-700'
                : 'bg-green-100 border-green-400 text-green-700'
            }`}
          >
            {submitMessage}
          </motion.div>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;
