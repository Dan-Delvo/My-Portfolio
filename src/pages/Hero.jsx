import profilePhoto from "../assets/Me.jpg";
import CircularText from "../component/CircularText";
import Threads from "../component/Threads";

export function Hero() {
  return (
    <>
      <div className="md:col-span-12 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-0 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Threads
            color={[5, 0.2, 0.2]}
            amplitude={1.5}
            distance={0.1}
            enableMouseInteraction={true}
          />
        </div>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-neutral-400 flex items-center justify-center md:justify-start gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                OPEN TO WORK
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Dan Jaspher
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                  R. Delvo
                </span>
              </h1>
            </div>
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto md:mx-0">
              Crafting exceptional digital experiences with modern technologies
              and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-red-500 to-red-500 rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 w-full sm:w-auto">
                View Projects
              </button>
              <button className="px-6 sm:px-8 py-3 border border-neutral-700 rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-300 w-full sm:w-auto">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Circular Text - positioned to wrap around the image */}
                <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 z-10">
                  <CircularText
                    text="FULLSTACK-DEVELOPER*FULLSTACK-DEVELOPER*"
                    className="w-full h-full"
                  />
                </div>

                <img
                  src={profilePhoto}
                  alt="Dan Jaspher Delvo"
                  className="w-full h-full rounded-full object-cover border-4 border-neutral-800 shadow-2xl shadow-red-500/20 relative z-0"
                />
                {/* Decorative Ring */}
                <div className="absolute -inset-3 sm:-inset-4 border-2 border-red-500/30 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
