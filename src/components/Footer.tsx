import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> by{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
              Swapnil Shikha
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
