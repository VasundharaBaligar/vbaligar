import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground font-sans text-sm">
            © {currentYear} Vasundhara Vishwanath Baligar. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-muted-foreground font-sans text-sm">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary mx-1" />
            </motion.span>
            for 3D Computer Vision
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
