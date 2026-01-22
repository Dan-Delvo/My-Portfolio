import DarkVeil from "../component/DarkVeil";
import CurvedLoop from "../component/CurvedLoop";
import { motion } from "framer-motion";
import CardFlip from "@/components/mvpblocks/card-flip";
import { SiLaravel, SiFlutter } from "react-icons/si";
import odrmsImage from "@/assets/odrms.png";
import ebikeSite from "@/assets/ebikeSite.png";
import ebikeApp from "@/assets/ebikeApp.png";

export function Projects() {
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
        <div className="relative w-full z-10 max-w-6xl mx-auto space-y-12 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left">
            <h2 className="text-4xl text-center sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Projects
            </h2>
          </motion.div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            <CardFlip
              icon={SiLaravel}
              image={odrmsImage}
              title="Document Management System"
              subtitle="Laravel • Dec 2024 - Present"
              description="Enterprise-grade web-based system for educational institutions managing 500+ users. Features role-based access, OTP authentication, real-time notifications, and comprehensive audit trails."
              features={[
                "Laravel 11 & PHP 8.2",
                "Real-time Notifications",
                "Role-based Access Control",
                "PDF/Excel Reports",
              ]}
              link="https://popberry.site"
            />
            <CardFlip
              icon={SiFlutter}
              image={ebikeApp}
              title="E-Bike Charging Kiosk"
              subtitle="Flutter • Nov 2025 - Jan 2026"
              description="Commercial Flutter app managing automated e-bike charging stations with hardware control via BLE. Features real-time monitoring, payment integration, and automated safety systems."
              features={[
                "Flutter & ESP32",
                "Bluetooth Low Energy",
                "Payment Integration",
                "Hardware Control",
              ]}
            />
            <CardFlip
              icon={SiLaravel}
              image={ebikeSite}
              title="E-Bike Management System"
              subtitle="Laravel • Nov 2025 - Jan 2026"
              description="Web platform for managing e-bike charging kiosks with transaction tracking, automated notifications, and multi-tenant architecture. Features REST APIs and real-time status monitoring."
              features={[
                "Laravel & MySQL",
                "Multi-tenant Architecture",
                "Transaction Tracking",
                "REST API Integration",
              ]}
              link="https://sandybrown-crane-809489.hostingersite.com/"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <CurvedLoop
            marqueeText="Laravel ✦ Flutter ✦ PHP ✦ MySQL ✦ React ✦"
            speed={2}
            curveAmount={400}
            direction="right"
            interactive
            className="custom-text-style"
          />
        </div>
      </div>
    </>
  );
}
