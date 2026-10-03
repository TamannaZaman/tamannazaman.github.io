import { motion } from 'framer-motion';
import { Award, CheckCircle, Globe } from 'lucide-react';

const Achievements = () => {
  const items = [
    {
      title: "Digital Accessibility Impact",
      desc: "Audited multiple government platforms, ensuring web content accessibility for thousands of PWDs.",
      icon: <Globe className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Social Inclusivity Leadership",
      desc: "Playing an integral role in social and sports organizations (BWSF) to promote inclusivity.",
      icon: <Award className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Technical Training Graduate",
      desc: "Successfully completed UI/UX and Women Technical Training (Ministry of Public Administration).",
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Key <span className="text-indigo-500">Achievements</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-800/40 rounded-3xl border border-white/5 hover:bg-slate-800 transition-all text-center group"
            >
              <div className="mb-4 inline-block p-4 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;