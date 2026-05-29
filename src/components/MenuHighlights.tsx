import { motion } from 'motion/react';

const menuCategories = [
  {
    title: "Z Morza",
    description: "Świeże ryby i owoce morza, podawane z szacunkiem do produktu.",
    items: [
      { name: "Filet z dorsza bałtyckiego", desc: "Złocista panierka, puree maślane, młoda kapusta", price: "54" },
      { name: "Halibut z pieca", desc: "Sos cytrynowy, pieczone warzywa korzeniowe", price: "68" },
      { name: "Krewetki na winie", desc: "Czosnek, masło, pietruszka, chrupiąca bagietka", price: "49" },
    ]
  },
  {
    title: "Z Lądu",
    description: "Dla tych, którzy szukają klasycznych smaków w nowoczesnym wydaniu.",
    items: [
      { name: "Tradycyjny schabowy", desc: "Krzywa z patelni, młode ziemniaki z koperkiem, mizeria", price: "48" },
      { name: "Polędwiczki wieprzowe", desc: "Sos borowikowy, kopytka, buraczki zasmażane", price: "56" },
      { name: "Sałata z kozim serem", desc: "Karmelizowane orzechy, maliny, sos balsamiczny", price: "42" },
    ]
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sea-900/60 uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
          >
            Nasze Menu
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-sea-900 mb-6"
          >
            Proste jedzenie, <br className="md:hidden"/> wybitny smak.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sand-800/80 text-lg font-light"
          >
            Uczciwe porcje, lokalne składniki i menu, które zadowoli zarówno miłośników morskiej klasyki, jak i amatorów mięsnych dań.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <div className="mb-10 text-center lg:text-left border-b border-sand-200 pb-6">
                <h3 className="font-serif text-3xl text-sea-900 mb-2">{category.title}</h3>
                <p className="text-sand-800/70 font-light">{category.description}</p>
              </div>
              
              <ul className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-medium text-sea-900">{item.name}</h4>
                      <span className="text-sand-800 font-medium ml-4">{item.price} zł</span>
                      <div className="hidden sm:block flex-1 border-b border-dotted border-sand-400 mx-4 opacity-30 group-hover:opacity-60 transition-opacity"></div>
                    </div>
                    <p className="text-sand-800/70 font-light text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-sea-900 text-sand-50 font-medium tracking-wide hover:bg-sea-800 transition-colors rounded-full shadow-sm"
          >
            ZAREZERWUJ I SPRÓBUJ
          </a>
        </motion.div>

      </div>
    </section>
  );
}
