import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';   // Importing icons for contact information and send button.

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-indigo-500">Touch</span></h2>
          <p className="text-gray-400">Have a question or want to work together?</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* 1. Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <p className="text-gray-400 leading-relaxed">
              I am currently looking for new opportunities. My inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Information with icons for email and location. */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500">
                  <Mail className="w-6 h-6" />
                </div>
                <span>tamanna.pry@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>House No-11/1, Chan Mia Road, Jatrabari, Dhaka-1236, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-white/5 shadow-xl"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors w-full"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors w-full resize-none"
              ></textarea>
              <button
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;