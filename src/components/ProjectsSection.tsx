import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import facialMotionImage from "@/assets/project-facial-motion.jpg";
import pointCloudImage from "@/assets/project-point-cloud.jpg";
import textureMappingImage from "@/assets/project-texture-mapping.jpg";

const projects = [
  {
    title: "Real-Time Facial Emotion Mapping",
    venue: "Computer Vision & Graphics Project",
    description:
      "A real-time facial motion capture system using OpenCV and Dlib. It tracks 68 facial landmarks and uses head pose estimation to map human expressions onto a Blender 3D rig (RIG-Vincent), enabling lifelike avatar control from webcam input.",
    techStack: ["OpenCV", "Dlib", "Python", "Blender", "NumPy"],
    image: facialMotionImage,
    arxivLink: undefined,
    githubLink: "#",
  },
  {
    title: "Point Cloud Hole Filling",
    venue: "3D Deep Learning Research",
    description:
      "An encoder-decoder Occupancy Network combining PointNet and ResNet architectures, designed to fill holes in sparse 3D point clouds. Trained on ShapeNet Core.v2 dataset, achieving greater than 90% shape accuracy on incomplete geometry reconstruction.",
    techStack: ["PyTorch3D", "PointNet", "ResNet", "ShapeNet", "CUDA"],
    image: pointCloudImage,
    arxivLink: undefined,
    githubLink: "#",
  },
  {
    title: "Surface Texture Mapping",
    venue: "IIT Delhi Research Project",
    description:
      "A neural mesh transfer pipeline that projects textures across incomplete 3D surfaces while preserving high-frequency geometric details. Utilizes progressive positional encoding to maintain texture fidelity on complex meshes.",
    techStack: ["PyTorch", "Open3D", "Neural Networks", "Mesh Processing"],
    image: textureMappingImage,
    arxivLink: undefined,
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-primary text-sm font-sans tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-charcoal">
            Research Projects
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
