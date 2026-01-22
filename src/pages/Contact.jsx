import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import DarkVeil from "../component/DarkVeil";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dandelvo12345@gmail.com",
      link: "mailto:dandelvo12345@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 960 371 1178",
      link: "tel:+639603711178",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taguig City, Philippines",
      link: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Dan Jaspher Delvo",
      link: "https://linkedin.com/in/dan-jaspher-delvo",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Dan-Delvo",
      link: "https://github.com/Dan-Delvo",
    },
  ];

  return (
    <>
      <div className="md:col-span-12 min-h-screen px-4 sm:px-6 md:px-12 py-20 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-red-950 via-black to-black">
          <DarkVeil
            hueShift={-115}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1}
            scanlineFrequency={0}
            warpAmount={1}
          />
          {/* Vignette overlay at top */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              background:
                "linear-gradient(to bottom, black 0%, transparent 20%)",
            }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const content = (
                <div className="group bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-red-900/30 rounded-2xl p-6 hover:border-red-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-900 via-red-800 to-red-950 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-red-100" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-zinc-400 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-white font-medium break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-8">
            <a
              href="mailto:dandelvo12345@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-900 via-red-800 to-red-950 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
