import { motion } from 'framer-motion';
import { BookOpen, Database, Cpu } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10" />

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                <BookOpen className="w-4 h-4" /> Undergraduate Thesis
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Bangla Fake News <span className="text-indigo-500">Detection</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Investigated the identification of misinformation in Bangla text using the <span className="text-white">BERT (Bidirectional Encoder Representations from Transformers)</span> model. 
                Processed large datasets to train the model, focusing on the linguistic nuances of the Bangla language for high-accuracy detection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Database className="w-5 h-5 text-indigo-500" />
                  <span>Large-scale Bangla Dataset</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Cpu className="w-5 h-5 text-indigo-500" />
                  <span>BERT Model Fine-tuning</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Side (Optional Illustration) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:block w-1/3"
            >
              <div className="p-8 bg-slate-800 rounded-2xl border border-white/10 shadow-2xl rotate-3">
                <pre className="text-[10px] text-indigo-300 font-mono">
                  {`// BERT Fine-tuning logic
import transformers from 'bert'

def train_model(dataset):
   # Processing Bangla text
   model = BERT.from_pretrained(
      "bangla-bert-base"
   )
   return model.fine_tune()`}
                </pre>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;