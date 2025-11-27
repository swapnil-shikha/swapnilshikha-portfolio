import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    alert('Resume download functionality will be implemented once your resume file is added to the project.');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/80 backdrop-blur-xl border-b border-glass-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SS
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={handleDownloadResume}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border-2 border-primary text-primary font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.button>

            <Link to="/contact">
              <motion.button
                className="px-6 py-2 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
