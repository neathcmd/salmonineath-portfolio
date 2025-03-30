import { useContext } from "react";
import { ThemeContext } from "../../Ui/ThemeContext";
import Boxs from "../Box/Boxs";
import AboutSectionButtons from "../../../components/Buttons/AboutSectionButtons";

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);
  const About = "About";
  const Me = "Me";
  const imageUrl =
    "https://www.shutterstock.com/image-illustration/cool-anime-guy-casual-outfit-600nw-2258372411.jpg";

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <article className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
        {/* Image Section - Reduced by 4% */}
        <div className="w-full lg:w-[48%] flex justify-center order-1 lg:order-1">
          {" "}
          {/* Reduced from 50% to 48% */}
          <div
            data-aos="fade-up"
            className="relative w-full max-w-[368px] xl:max-w-[384px]" /* Reduced from ~400px */
          >
            {/* Glow Background */}
            <div
              className={`absolute inset-0 rounded-xl blur-lg opacity-80 transform scale-[0.98]
                ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#00ff99]/50 via-[#0099ff]/40 to-[#00ff99]/50"
                    : "bg-gradient-to-br from-[#00ff99]/40 via-[#0099ff]/30 to-[#00ff99]/40"
                } animate-pulse-slow`}
              aria-hidden="true"
            />

            {/* Image Container */}
            <div
              className={`relative p-1.5 overflow-hidden transition-all duration-500 rounded-xl
                ${
                  theme === "dark"
                    ? "shadow-[0_0_30px_rgba(0,255,153,0.7)] hover:shadow-[0_0_50px_rgba(0,255,153,1)]"
                    : "shadow-[0_0_25px_rgba(0,255,153,0.5)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)]"
                } hover:scale-[1.02]`}
            >
              {/* Gradient Border */}
              <div
                className={`animate-spin-slow relative rounded-xl
                  ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                      : "bg-gradient-to-br from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                  } p-1.5`}
              >
                <div
                  className={`bg-${
                    theme === "dark" ? "[#1c1c22]" : "white"
                  } rounded-lg overflow-hidden`}
                >
                  <img
                    src={imageUrl}
                    alt="Cool anime guy in a casual outfit"
                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section - Slightly expanded to 52% */}
        <div className="w-full lg:w-[52%] order-2 lg:order-2 space-y-6">
          <h1
            data-aos="fade-down"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span>{About}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] pl-3 sm:pl-4">
              {Me}
            </span>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed"
            data-aos="fade-right"
          >
            I'm Sal Monineath, a front-end developer and graphic designer
            passionate about crafting modern, visually appealing, and functional
            web applications. With 20+ successful design projects, I blend
            creativity with technical expertise.
          </p>
          {/* short Info */}
          <div>
            <Boxs />
          </div>
          {/* action buttons */}
          <div>
            <AboutSectionButtons />
          </div>
        </div>
      </article>
    </section>
  );
}
