import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  venue?: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt?: string;
  index: number;
}

const ProjectCard = ({
  title,
  venue,
  description,
  techStack,
  image,
  imageAlt,
  index,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  const [showAltImage, setShowAltImage] = useState(false);
  const hasAltImage = !!imageAlt;
  const currentImage = showAltImage && imageAlt ? imageAlt : image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20"
    >
      {/* Visual Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`relative ${!isEven ? "lg:order-2" : ""}`}
      >
        <div 
          className={`relative aspect-video rounded-2xl overflow-hidden bg-card-gradient border border-border shadow-soft-lg group ${hasAltImage ? "cursor-pointer" : ""}`}
          onClick={() => hasAltImage && setShowAltImage(!showAltImage)}
        >
          <img
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          {hasAltImage && (
            <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-xs font-sans text-muted-foreground border border-border">
              Click to {showAltImage ? "see input" : "see output"}
            </div>
          )}
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 blur-sm" />
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`space-y-5 ${!isEven ? "lg:order-1" : ""}`}
      >
        {/* Title & Venue */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal leading-snug mb-2">
            {title}
          </h3>
          {venue && (
            <p className="text-primary font-sans text-sm font-medium tracking-wide">
              {venue}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground font-sans text-base leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-sans font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
