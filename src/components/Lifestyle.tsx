import { motion } from 'motion/react';
import image1 from '../assets/images/regenerated_image_1780049887896.webp';
import image2 from '../assets/images/regenerated_image_1780049887324.webp';

export default function Lifestyle() {
  return (
    <section className="py-24 bg-sand-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={image1} 
                alt="Świeża ryba" 
                className="w-full h-48 md:h-64 object-cover rounded-xl"
              />
              <img 
                src={image2} 
                alt="Klimat wieczoru" 
                className="w-full h-48 md:h-64 object-cover -translate-y-6 rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 md:pl-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-sea-900 leading-tight mb-6">
              Z Bałtykiem w tle.
            </h2>
            <div className="space-y-4 text-sand-800/80 font-light">
               <p>
                Wiemy, co znaczy dobre jedzenie nad morzem. Dlatego w naszej kuchni stawiamy na świeżość, prostotę i jakość, której nie trzeba maskować.
              </p>
              <p>
                Niezależnie od tego, czy jesteś u nas pierwszy raz i spędzasz urlop w Mielnie, czy wpadasz regularnie z okolicznych miejscowości – chcemy, by to miejsce zawsze kojarzyło się z dobrym czasem i świetną kuchnią.
              </p>
            </div>
            <a 
              href="#story" 
              className="inline-block mt-8 pb-1 border-b border-sea-900 text-sea-900 font-medium tracking-wide hover:text-black hover:border-black transition-colors"
            >
              POZNAJ NAS LEPIEJ
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
