import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Emmakaranja1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/emma-k-karanja/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:karanjaemmak@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Emma karanja
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Software Engineer dedicated to transforming complex challenges into seamless,
              user-focused solutions. Driven by innovation, collaboration, and measurable impact—ready to help your team build technology that truly makes a difference
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a
                  href="mailto:kelly@example.com"
                  className="hover:text-primary transition-colors"
                >
                  karanjaemmak@gmail.com
                </a>
              </p>
              <p>Nairobi, Kenya</p>
              <p className="text-sm">
                Available for freelance and full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>© {currentYear} Emma Karanja. Built using React & Tailwind CSS</span>
            </div>

            <div className="text-sm text-muted-foreground">
              <span>Designed & Developed by Emma Karanja</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:animate-bounce" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;