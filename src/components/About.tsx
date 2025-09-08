import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'I love breaking down complex challenges into elegant, efficient solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Fast Learner',
      description: 'Always staying current with the latest technologies and best practices.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to development with strong communication skills.'
    },
    {
      icon: Coffee,
      title: 'Dedicated',
      description: 'Passionate about creating software that makes a real difference.'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Software Engineering Bootcamp',
      description: 'Graduated from Moringa School with expertise in full-stack development',
      color: 'text-primary'
    },
    {
      year: '2024',
      title: 'Graduated as an IT Specialist – KCA University',
      description: 'Specialized in computer hardware, networking, database management, operating systems, project management, cybersecurity, and software engineering principles.',
      color: 'text-primary'
    },
    {
      year: '2023',
      title: 'Attachment at Jumbostar solutions Ltd',
      description: 'Gained hands-on experience in a professional software development environment',
      color: 'text-primary-light'
    },
    {
      year: 'Now',
      title: 'Backend Developer Intern – Meraki Systems (Contractor for KCB Bank)',
      description: 'Currently working as a Backend Developer Intern at Meraki Systems, a contractor for KCB Bank. Contributing to backend development tasks, gaining practical experience with real-world banking systems, and enhancing my skills in software engineering while collaborating with senior developers.',
      color: 'text-primary'

    },


    {
      year: 'Future',
      title: 'Continuous Learning',
      description: 'Committed to lifelong learning and exploring new technologies',
      color: 'text-primary-light'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
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
            <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey into software engineering began with a simple curiosity that grew into a genuine passion for creating technology that truly matters. For me, it’s never just about writing code—it’s about designing solutions that solve real problems, make life easier, and create a lasting, positive impact.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="gradient-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My passion for programming first sparked during my attachment at Jumbo Star Solution Ltd, where I experienced
                  the excitement of solving problems with technology. After graduating from KCA University, that spark grew even stronger,
                  leading me to join Moringa School. There, I honed my skills and deepened my love for building clean,
                  efficient, and impactful solutions.
                </p>
                <p>
                  I specialize in <span className="text-primary font-semibold">React</span> for creating intuitive,
                  user-friendly interfaces and <span className="text-primary font-semibold">Python</span> for developing
                  robust, high-performance backend systems. I’m especially motivated by projects that merge technical
                  excellence with meaningful, real-world results.
                </p>
                <p>
                  Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, mentoring
                  aspiring developers, playing video games, and exploring cybersecurity. I’m eager to bring my dedication,
                  adaptability, and problem-solving skills to a forward-thinking team where I can contribute, grow,
                  and help create innovative solutions.

                </p>

              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="gradient-card rounded-xl p-6 shadow-soft hover-lift"
                  >
                    <Icon className="text-primary mb-3" size={24} />
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">My Journey</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6 pb-8"
                >
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-3 h-3 bg-primary rounded-full border-4 border-background shadow-soft" />
                    {index < timeline.length - 1 && (
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="gradient-card rounded-xl p-6 shadow-soft hover-lift flex-1">
                    <div className={`text-sm font-medium ${item.color} mb-2`}>
                      {item.year}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="gradient-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Currently Exploring</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm diving deeper into cloud technologies, exploring serverless architectures,
              and building more complex full-stack applications. Always excited to learn
              new technologies and take on challenging projects!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;