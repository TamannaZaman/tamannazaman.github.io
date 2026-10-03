import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Photo from '../assets/Tamannaa.png';
// import { Code2, Accessibility, Heart, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 flex items-center bg-[#0b1220] relative overflow-hidden" ref={ref}>
      {/* <section id="about" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden" ref={ref}> */}
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* 1. Left Side: Image with Animated Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            // className="w-full lg:w-2/5"
            className="w-full lg:w-[31%]"
          >
            <div className="relative group">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div> */}
              <div className="absolute -inset-1 bg-gradient-to-r bg-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              {/* <div className="relative aspect-square bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden"> */}
              <div className="relative aspect-square rounded-2xl flex items-center justify-center overflow-hidden">

                {/* Placeholder for your future photo */}
                {/* <span className="text-gray-600 italic">[ Your Image Here ]</span> */}
                <img src={Photo} alt="Tamanna" className="object-cover w-full h-full" />
              </div>
            </div>
          </motion.div>


          {/* 2. Right Side: Bio & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            // className="w-full lg:w-3/5"
            className="w-full lg:w-[69%]"
          >
            {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-indigo-500">Me</span>
            </h2> */}
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-[0.2em] block mb-2">
              The Story So Far
            </span>
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Passionate about building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">inclusive technology</span>
            </h2>

            <div className="space-y-3 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Computer Science graduate focused on backend development, frontend development, and inclusive digital systems.
                As an organized and detail-oriented software professional, I value discipline, consistency, and continuous learning whether managing backend systems, building responsive interfaces, or improving accessibility.
              </p>
              <p>
                With experience at Eutropia IT Solution, a2i, and through freelance projects, I have worked across software development and digital inclusion.
                I specialize in building scalable, accessible web and believe technology should be a bridge, not a barrier.
              </p>
              <p>
                Beyond development, my involvement with the Bangladesh Wheelchair Sports Foundation has strengthened my commitment to community initiatives, technical maintenance, and social impact.
                These experiences have shaped my approach to engineering through technical rigor, human-centered thinking, and meaningful problem-solving.
              </p>
              <p>
                I build clean, reliable, maintainable systems designed for real-world impact.
                Whether working on backend architecture, frontend interfaces, accessibility, or new digital solutions, I strive to create technology that works for everyone.
              </p>
              <p>
                Let’s build something that matters. Small steps lead to big achievements.
              </p>
            </div>


            {/* Quick Stats Block */}
            <div className="mt-6 grid grid-cols-3 gap-8 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div>
                <h3 className="text-white font-bold text-2xl">03+</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">05+</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Major Projects</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">100%</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Commitment</p>
              </div>
            </div>

            {/* Quick Stats (Dummy) */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-indigo-500 font-bold text-2xl">02+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-indigo-500 font-bold text-2xl">05+</h3>
                <p className="text-gray-500 text-sm">Major Projects</p>
              </div>
              <div>
                <h3 className="text-indigo-500 font-bold text-2xl">1000+</h3>
                <p className="text-gray-500 text-sm">Users Impacted</p>
              </div>
            </div> */}

          </motion.div>

        </div>
      </div>

    </section>
  );

};

export default About;