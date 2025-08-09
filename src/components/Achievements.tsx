import { motion } from 'framer-motion';
import { Trophy, ShieldAlert, Rocket, BadgeCheck, GraduationCap, Network } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Led Successful Projects',
    description: 'Played a key leadership role in the collaborative development of Ajali! Emergency Response Platform and ArtVault, ensuring timely delivery, strong team coordination, and successful deployment.',
  },
  {
    icon: ShieldAlert,
    title: 'Ajali! Emergency Response Platform',
    description: 'Contributed to the design and development of a full-stack application, integrating Google Maps API, SMS/email notifications, and secure authentication to enhance real-time emergency reporting.',
  },
  {
    icon: Rocket,
    title: 'First Production-Ready Project',
    description: 'Designed and deployed a React + Python/Flask app with database integration, authentication, and responsive UI.',
  },
  {
    icon: BadgeCheck,
    title: 'High Test Coverage Standards',
    description: 'Maintained 90%+ unit test coverage in project codebases using Pytest and Jest.',
  },
  {
    icon: GraduationCap,
    title: 'Graduated from Moringa School',
    description: 'Completed an intensive full-stack software engineering program, gaining hands-on experience in Agile, REST API development, and UI/UX design.',
  },
  {
    icon: Network,
    title: 'IT Foundations from KCA University',
    description: 'Gained proficiency in networking, database management, cybersecurity basics, and IT project management.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Key Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A timeline of my proudest professional and academic accomplishments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="gradient-card rounded-2xl p-6 shadow-medium hover-lift"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-accent text-primary">
                  <achievement.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
