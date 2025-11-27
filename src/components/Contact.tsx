import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '7004957633',
      href: 'tel:7004957633',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'swapnilshikha856@gmail.com',
      href: 'mailto:swapnilshikha856@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/swapnil-shikha',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/swapnil-shikha-9523a4325',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's create something amazing together</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-glass-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-glass-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-glass-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-xl shadow-primary/50 hover:shadow-2xl hover:shadow-primary/70 transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Social Links</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary group-hover:bg-white/20 flex items-center justify-center text-primary-foreground transition-all">
                      {link.icon}
                    </div>
                    <span className="font-medium text-sm">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
