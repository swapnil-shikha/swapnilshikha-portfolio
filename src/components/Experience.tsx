import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {[1, 2].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-8 mb-6 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground mb-2">Position details will be added</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>To be announced</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground">
              Excited to add more experiences here soon! 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
