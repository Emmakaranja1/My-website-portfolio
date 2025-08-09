import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Health Simplified CLI',
      description: 'A Python-based command-line tool for managing nutrition goals, tracking daily food intake, and planning weekly meals. Designed for busy professionals and developer students with a focus on OOP, SQLAlchemy, and Typer.',
      image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800&h=600&fit=crop',
      technologies: ['Python', 'Typer', 'PostgreSQL', 'SQLAlchemy', 'pytest', 'setuptools'],
      features: [
        'Full-featured CLI for nutrition tracking',
        'CRUD operations for users, food entries, goals, and meal plans',
        'Custom reports and progress tracking',
        'Weekly meal plan generation',
        'Input validation and error handling'
      ],
      githubUrl: 'https://github.com/Emmakaranja1/Health-Simplified-CLI-Application',
      category: 'CLI Tool'
    },
    {
      title: 'Ajali App - Emergency Response Platform',
      description: 'A real-time emergency reporting and alert system with geolocation tracking, multimedia incident uploads, and instant notifications. Built with React and Flask, integrated with Google Maps API, SMS, and email services to connect users with responders quickly and efficiently.',
      image: 'https://res.cloudinary.com/dmzpxoieh/image/upload/v1754749503/ChatGPT_Image_Aug_9_2025_05_15_29_PM_seywu9.png',
      technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Flask', 'PostgreSQL', 'JWT Authentication'],
      features: [
        'User and admin authentication',
        'Real-time incident reporting with media uploads',
        'Interactive maps for incident locations',
        'Incident status tracking and notifications'
      ],

      githubUrl: '',
      liveUrl: '',
      category: 'Full-stack'
    },
    {
      title: 'SoundScribe-AI',
      description: 'A bilingual AI-powered music generator that creates melodies and lyrics in Kiswahili and English. Supports multiple genres with user customization for language, genre, mood, tempo, and theme, with export options as MP3 or MIDI.',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop',
      technologies: ['Python', 'Flask', 'TensorFlow', 'PyTorch', 'Magenta Studio', 'GPT-4', 'Vite', 'React', 'MongoDB', 'Firebase', 'AWS', 'Azure'],
      features: [
        'AI-powered melody and lyrics generation',
        'Bilingual support: Kiswahili & English',
        'Customizable music creation (language, genre, mood, tempo, theme)',
        'Export as MP3 or MIDI',
        'Multilingual user interface'
      ],
      githubUrl: 'https://github.com/Emmakaranja1/SoundScribe_AI',
      liveUrl: '',
      category: 'AI/Music'
    },
    {
      title: 'MovieMix',
      description: 'A React-based movie management application with search, watchlist, and rating features. Supports adding, editing, and deleting movies with authentication and global state management.',
      image: 'https://res.cloudinary.com/dmzpxoieh/image/upload/v1754751094/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ_se60up.webp',
      technologies: ['React', 'Vite', 'React Router', 'Context API', 'json-server', 'OMDB API', 'Vercel'],
      features: [
        'User registration and login (mocked authentication)',
        'Search and view movie details from OMDB API',
        'Add, edit, and delete movies from collection',
        'Watchlist and 5-star rated movies pages',
        'Global state management with Context API',
        'Responsive and user-friendly design'
      ],
      githubUrl: 'https://github.com/your-username/moviemix',
      liveUrl: 'https://movie-mix-project.vercel.app/',
      category: 'Frontend'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating proficiency across the full development stack.
            Each project represents real-world solutions built with modern technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${selectedCategory === category
                ? 'gradient-primary text-primary-foreground shadow-medium'
                : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <ChevronRight size={12} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/20 text-primary bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex-1"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium"
          >
            <a href="https://github.com/Emmakaranja1" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Add useState import
import { useState } from 'react';

export default Projects;