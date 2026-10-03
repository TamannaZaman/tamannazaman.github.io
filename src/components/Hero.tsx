import { motion } from 'framer-motion';   // Importing motion for animations ("Fade In" hoye ashe)
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {

  return (

    <section className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden" >

      {/* // 1.Background Glow Effect. */}
      {/* < div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]" > */}
      < div className="absolute inset-0 overflow-hidden" >
        {/* Bam diker halka cyan glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        {/* Dan diker halka purple glow */}
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* // Main Content update. */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center" >

        {/* 2. Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }
          }
          transition={{ duration: 0.6 }}
        >
          {/* // Personalize the text and styling as needed. */}
          {/* <h2 className="inline-block text-indigo-400 font-medium mb-4 tracking-widest uppercase" >Open to opportunities</h2> */}
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 backdrop-blur-md">
            Open to opportunities
          </span>
        </motion.div>

        {/* 3. Main Title (Hi, I'm Tamanna Zaman) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {/* Hi, I'm <span className="text-indigo-500">Tamanna Zaman</span> */}
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500">
            Tamanna Zaman
          </span>
        </motion.h1>

        {/* 4. Roles (Mapping Logic) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {/* <h2 className="text-indigo-400 font-medium mb-4 tracking-widest uppercase">Software Engineer | Backend Specialist</h2> */}
          {["Software Engineer", "Backend Specialist"].map((role) => (
            <span
              key={role}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/1 text-gray-300 text-sm font-medium hover:border-indigo-500/50 transition-colors"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* < p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" >
            I am a passionate developer who loves building digital experiences
            that combine clean code with great design. </p> */}
        {/* 5. Subtext (Descriptive & Impactful) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building accessible and scalable digital systems, combining clean code with thoughtful design.
          Bridging the gap between technology and inclusivity.
          {/* Building <span className="text-white font-medium">accessible</span> and
            <span className="text-white font-medium"> scalable</span> digital systems, combining clean code with thoughtful design.
            Bridging the gap between technology and inclusivity. */}
        </motion.p>

        {/* 6. Action Buttons (Mail, LinkedIn, GitHub) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* < button className="px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:bg-gray-800 transition-all" >Contact Me</button> */}
          <a href="#contact"
            className="inline-flex items-center px-8 py-3 gap-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25"
          >
            <Mail size={18} />Get in Touch
          </a>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/tamanna-zaman" target="_blank"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/TamannaZaman" target="_blank"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Github size={20} />
            </a>
          </div>



        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1" >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>

    </section>

  );
};

export default Hero;
// This is the Hero component, which serves as the introductory section of your portfolio. It includes a background glow effect, animated text, and call-to-action buttons. You can customize the text, styling, and links as needed to better reflect your personal brand and style.