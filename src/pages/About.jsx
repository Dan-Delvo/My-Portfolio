import ScrollVelocity from "../component/ScrollVelocity";
import { motion } from "framer-motion";

export function About() {
  const skills = [
    {
      category: "Backend & Server",
      items: ["Laravel", "PHP", "MySQL", "REST APIs", "MVC Architecture"],
    },
    {
      category: "Frontend & Mobile",
      items: ["Blade", "JavaScript", "AJAX", "Bootstrap", "Flutter"],
    },
    {
      category: "Systems & Tools",
      items: [
        "Git",
        "Database Design",
        "PWA",
        "FCM",
        "Email/SMS Notifications",
      ],
    },
  ];

  const experiences = [
    {
      role: "Freelance Full-Stack Developer",
      period: "Nov 2025 – Jan 2026",
      location: "Taguig City, Philippines (Hybrid)",
      project: "E-Bike Charging Station Management System",
      highlights: [
        "Developed production-ready e-bike charging ecosystem for commercial client",
        "Built Flutter-based mobile kiosk with BLE and ESP32 hardware integration",
        "Implemented Laravel web management platform with REST APIs",
        "System actively used by 500+ users in real-world operations",
      ],
      tech: "Flutter • Laravel • PHP • MySQL • ESP32 • BLE",
    },
    {
      role: "Full Stack Developer Intern",
      company: "iEminence Inc.",
      period: "September 2025 – January 2026",
      location: "Makati City, Philippines",
      highlights: [
        "Implemented client management modules with full CRUD workflows",
        "Developed bulk import/export features for large-scale operations",
        "Built User Profile module with secure authentication",
        "Collaborated using Git-based workflows and agile practices",
      ],
      tech: "Laravel • MySQL • Blade • JavaScript • Livewire",
    },
  ];

  return (
    <>
      <div className="md:col-span-12 min-h-screen px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-gradient-to-b from-black via-red-950 to-black relative overflow-hidden">
        {/* Scrolling text strips */}
        <div className="absolute inset-0 z-0 opacity-30">
          <ScrollVelocity
            texts={[
              "LARAVEL • PHP • MYSQL • REST APIs • MVC ARCHITECTURE •",
              "FLUTTER • BLADE • JAVASCRIPT • BOOTSTRAP • GIT •",
            ]}
            velocity={100}
            className="text-4xl font-bold text-red-500/50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto md:mx-0">
              Junior Full Stack Developer with hands-on experience building,
              deploying, and maintaining production systems using Laravel and
              MySQL. I've developed enterprise internal systems and real-world
              applications actively used by 500+ users.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 sm:p-8 hover:border-red-500/40 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
              Education
            </h3>
            <p className="text-lg sm:text-xl text-red-400 font-semibold">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-neutral-400">
              Polytechnic University of the Philippines – Taguig Campus
            </p>
            <span className="inline-block mt-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
              Currently Enrolled
            </span>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center md:text-left">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {skills.map((skillSet, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-bold text-red-400 mb-3">
                    {skillSet.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillSet.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center md:text-left">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 sm:p-8 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h4>
                      {exp.company && (
                        <p className="text-red-400 font-semibold">
                          {exp.company}
                        </p>
                      )}
                      {exp.project && (
                        <p className="text-red-400 font-semibold italic">
                          {exp.project}
                        </p>
                      )}
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-300 flex items-start gap-2">
                        <span className="text-red-500 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.split("•").map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-xs sm:text-sm">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
