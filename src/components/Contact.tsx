import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-sea-900 text-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
                Wpadnij na <br/> coś pysznego.
              </h2>
              <p className="text-sand-200 font-light text-lg max-w-md">
                Jesteśmy w sercu Mielna. Idealne miejsce na obiad podczas spaceru lub dłuższą kolację blisko morza.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sand-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Lokalizacja</h4>
                  <p className="text-sand-200 font-light mt-1">ul. Chrobrego 24<br/>76-032 Mielno</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-sand-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Rezerwacje</h4>
                  <p className="text-sand-200 font-light mt-1">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sand-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Godziny otwarcia</h4>
                  <p className="text-sand-200 font-light mt-1">
                    Poniedziałek - Niedziela<br/>12:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-sea-800 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sea-800 flex items-center justify-center hover:bg-sand-50 hover:text-sea-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sea-800 flex items-center justify-center hover:bg-sand-50 hover:text-sea-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-sea-800/50 p-8 md:p-12 rounded-2xl"
          >
            <h3 className="font-serif text-2xl mb-8">Napisz do nas</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-sand-200 mb-2">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-sand-200/30 py-3 text-sand-50 focus:outline-none focus:border-sand-50 transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="date" className="block text-sm font-light text-sand-200 mb-2">Data</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full bg-transparent border-b border-sand-200/30 py-3 text-sand-50 focus:outline-none focus:border-sand-50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-light text-sand-200 mb-2">Liczba gości</label>
                  <input 
                    type="number" 
                    id="guests" 
                    min="1"
                    className="w-full bg-transparent border-b border-sand-200/30 py-3 text-sand-50 focus:outline-none focus:border-sand-50 transition-colors"
                    placeholder="2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-sand-200 mb-2">Wiadomość (opcjonalnie)</label>
                <textarea 
                  id="message" 
                  rows={3}
                  className="w-full bg-transparent border-b border-sand-200/30 py-3 text-sand-50 focus:outline-none focus:border-sand-50 transition-colors resize-none"
                  placeholder="Szczegóły rezerwacji..."
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full py-4 bg-sand-50 text-sea-900 font-medium tracking-wide hover:bg-white transition-colors mt-4 rounded-full shadow-sm"
              >
                WYŚLIJ ZAPYTANIE
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
