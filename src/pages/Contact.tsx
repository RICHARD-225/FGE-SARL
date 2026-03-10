import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      details: ['+225 27 33 74 63 67', '07 78 02 08 03'],
      action: 'tel:+2252733746367',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['fraternitegroupeentreprise@gmail.com'],
      action: 'mailto:fraternitegroupeentreprise@gmail.com',
    },
    {
      icon: <FaClock />,
      title: 'Horaires',
      details: ['Lun - Sam: 07h30 - 19h00', 'Dimanche: 11h00 - 18h00', 'Jours fériés: 08h30 - 17h00'],
      action: null,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      details: ['AHOUGNASSOU 2 - PREMIER CHARBON, Bouaké, Côte d\'Ivoire, BOUAKE'],
      action: null,
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous sommes à votre écoute pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl text-orange-500 mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {info.action && idx === 0 ? (
                        <a
                          href={info.action}
                          className="hover:text-orange-500 transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Nos moyens de contact
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <FaPhone className="text-orange-500 mr-2" />
                      Appelez-nous
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Notre équipe est disponible pour répondre à vos questions :
                    </p>
                    <a
                      href="tel:+2252733746367"
                      className="text-orange-500 hover:text-orange-600 font-semibold block"
                    >
                      +225 27 33 74 63 67
                    </a>
                    <a
                      href="tel:+2250778020803"
                      className="text-orange-500 hover:text-orange-600 font-semibold block"
                    >
                      07 78 02 08 03
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <FaWhatsapp className="text-green-500 mr-2" />
                      WhatsApp
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Contactez-nous directement sur WhatsApp pour une réponse rapide :
                    </p>
                    <a
                      href="https://wa.me/2250778020803"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="mr-2" />
                      Ouvrir WhatsApp
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <FaEnvelope className="text-orange-500 mr-2" />
                      Email
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Envoyez-nous un email, nous vous répondrons dans les 24h :
                    </p>
                    <a
                      href="mailto:fraternitegroupeentreprise@gmail.com"
                      className="text-orange-500 hover:text-orange-600 font-semibold break-all"
                    >
                      fraternitegroupeentreprise@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <FaClock className="text-orange-500 mr-2" />
                      Horaires d'ouverture
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between">
                        <span>Lundi - Samedi</span>
                        <span className="font-semibold">07h30 - 19h00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="font-semibold">11h00 - 18h00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Jours fériés</span>
                        <span className="font-semibold">08h30 - 17h00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-96 w-full relative"
        >
          <iframe
            title="Localisation Fraternité Groupe Entreprise - Bouaké"
            src="https://www.google.com/maps?q=7.6928,-5.5341&hl=fr&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/ki3kCcmoByn4Ly3s5?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold hover:bg-blue-50 transition-colors z-10"
          >
            📍 Voir sur Google Maps
          </a>
        </motion.div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'une réponse rapide ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous directement par téléphone ou WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2252733746367"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Appeler maintenant
              </a>
              <a
                href="https://wa.me/2250778020803"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
