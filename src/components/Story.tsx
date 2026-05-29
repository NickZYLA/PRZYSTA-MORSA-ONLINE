import { motion } from 'motion/react';
import image1 from '../assets/images/regenerated_image_1780049885916.webp';
import image2 from '../assets/images/regenerated_image_1780049886661.webp';

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-sea-900 leading-tight">
              Prawdziwy smak <br />
              <span className="text-sand-800 italic">polskiego morza.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-sand-800/80 font-light leading-relaxed">
              <p>
                Przystań Morsa to nie tylko restauracja. To miejsce, gdzie nowoczesne podejście do nadmorskiej kuchni spotyka się z ciepłem lokalnej gościnności. Z dala od zgiełku, blisko natury.
              </p>
              <p>
                Każdego dnia wybieramy to, co najlepsze z bałtyckich połowów. Tworzymy przestrzeń, w której czas płynie wolniej – przy wspólnym stole, ze znajomymi i rodziną, cieszac się chwilą po dniu spędzonym na plaży.
              </p>
              <p>
                Wierzymy w prostotę, autentyczne smaki i swobodny klimat, który towarzyszy wakacyjnym zachodom słońca.
              </p>
            </div>
            
            <div className="pt-4 border-t border-sand-200 mt-8">
              <p className="font-serif text-xl text-sea-900">
                Niezależnie czy wpadasz na szybki obiad, czy długą kolację z przyjaciółmi – poczuj się jak u siebie.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img 
                src={image1} 
                alt="Wnętrze Przystani Morsa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-1/2 aspect-square overflow-hidden rounded-xl border-8 border-sand-50 hidden md:block">
               <img 
                src={image2} 
                alt="Detale kulinante" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
