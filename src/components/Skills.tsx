import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Palette,
  Globe,
  Wrench,
  GitBranch,
  Server,
  Smartphone,
  Cloud,
  TestTube
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-500',
      skills: [
        { name: 'React', description: 'Building dynamic user interfaces' },
        { name: 'JavaScript', description: 'Modern ES6+ features' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'HTML/CSS', description: 'Semantic markup & styling' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500',
      skills: [
        { name: 'Python', description: 'Flask, FastAPI development' },
        { name: 'Flask', description: 'RESTful API development' },
        { name: 'Node.js', description: 'Server-side JavaScript' },
        { name: 'RESTful APIs', description: 'API design & implementation' },
        { name: 'Authentication', description: 'JWT, OAuth integration' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-purple-500',
      skills: [
        { name: 'PostgreSQL', description: 'Relational database design' },
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'SQLAlchemy', description: 'Python ORM' },
        { name: 'Database Design', description: 'Schema optimization' }
      ]
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'text-orange-500',
      skills: [
        { name: 'Git & GitHub', description: 'Version control & collaboration' },
        { name: 'VS Code', description: 'Development environment' },
        { name: 'Docker', description: 'Containerization basics' },
        { name: 'Postman', description: 'API testing & documentation' }
      ]
    },
    {
      title: 'Testing & Debugging',
      icon: TestTube,
      color: 'text-yellow-500',
      skills: [
        { name: 'Pytest', description: 'Unit and integration testing for Python' },
        { name: 'Jest & RTL', description: 'JavaScript testing and component testing' },
        { name: 'npm test', description: 'Running test suites in Node.js projects' },
        { name: 'CLI Debugging', description: 'Browser and server-side debugging' }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-pink-500',
      skills: [
        { name: 'UI/UX Design', description: 'User-centered design' },
        { name: 'Figma', description: 'Design prototyping' },
        { name: 'Responsive Design', description: 'Mobile-first approach' },
        { name: 'Accessibility', description: 'Inclusive design principles' }
      ]
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      color: 'text-cyan-500',
      skills: [
        { name: 'Vercel', description: 'Frontend deployment' },
        { name: 'Heroku', description: 'Full-stack applications' },
        { name: 'Netlify', description: 'Static site deployment' },
        { name: 'AWS Basics', description: 'Cloud services fundamentals' }
      ]
    }
  ];

  const additionalSkills = [
    'Scrum Leadership: Sprint planning, backlog grooming, team facilitation',
    'Project Management: Scope estimation, timeline tracking, issue resolution',
    'Communication: Professional reporting, cross-functional coordination, user support',
    'Teamwork: Collaborated in academic, bootcamp, and company teams',
    'Self-Management: Task ownership, deadline discipline, quick learning',
    'Entrepreneurial Thinking: Initiative-driven, solution-oriented, adaptable mindset',
    'Problem Solving: Real-time debugging, system diagnostics, iterative improvements'
  ];
  return (
    <section id="skills" className="py-20 bg-background">
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
            <span className="gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through hands-on projects and continuous learning.
            I'm always expanding my skills to stay current with industry trends.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="gradient-card rounded-2xl p-6 shadow-medium hover-lift flex flex-col group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color} transition-colors duration-300 group-hover:bg-primary/20`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex-grow flex flex-wrap gap-x-3 gap-y-4 content-start">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                      viewport={{ once: true }}
                      className="relative group/skill"
                    >
                      <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-primary/50 hover:text-primary-foreground hover:scale-105">
                        {skill.name}
                      </span>
                      <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-card border border-border rounded-lg shadow-xl opacity-0 group-hover/skill:opacity-100 transition-all duration-300 ease-in-out pointer-events-none transform scale-95 group-hover/skill:scale-100 origin-bottom">
                        <p className="text-sm text-muted-foreground font-normal">{skill.description}</p>
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-border transform rotate-45"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalSkills.map((skill, index) => {
              const parts = skill.split(/:\s*(.*)/s);
              const title = parts[0];
              const description = parts[1] || '';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-accent/30 p-6 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-accent/60"
                >
                  <h4 className="font-bold text-primary text-lg mb-2">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="gradient-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Currently Learning</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always expanding my skillset. Here's what I'm currently focusing on to stay ahead of the curve.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Next.js', focus: 'Full-stack React framework' },
                { name: 'GraphQL', focus: 'Modern API development' },
                { name: 'AWS', focus: 'Cloud infrastructure' },
                { name: 'DevOps', focus: 'CI/CD pipelines' },
                { name: 'Mobile Development', focus: 'React Native' },
                { name: 'Machine Learning', focus: 'Python libraries' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-background/50 rounded-lg p-4 border border-border"
                >
                  <h4 className="font-medium text-primary mb-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
