import { motion } from 'motion/react';
import { Utensils, Users, Sun } from 'lucide-react';

export default function Atmosphere() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Na rodzinny obiad i wieczór ze znajomymi",
      desc: "Luźna atmosfera sprawia, że to idealne miejsce na swobodne spotkania, bez względu na okazję."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Letnia energia, całoroczne ciepło",
      desc: "Wystrój inspirowany nadmorską naturą – jasne barwy, drewno i słońce wpadające przez duże okna."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Uczciwa gościnność",
      desc: "Dbamy o to, by każdy gość czuł się zauważony. Jesteśmy tu dla Was, z uśmiechem i dobrą energią."
    }
  ];

  return (
    <section id="atmosphere" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl mt-4 md:text-5xl text-sea-900 mb-6"
          >
            Klimat, do którego <br className="md:hidden" /> chce się wracać.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-sand-200 flex items-center justify-center text-sea-900 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-sea-900">{feature.title}</h3>
              <p className="text-sand-800/80 font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
