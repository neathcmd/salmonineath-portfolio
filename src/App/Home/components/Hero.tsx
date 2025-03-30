import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Ui/ThemeContext";
import SocialIcons from "../../../components/icons/SocialIcons";
import Buttons from "../../../components/Buttons/Buttons";
import "../../../Animation.css";

export default function HeroSection() {
  const themeProvider = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Front-End Web Developer",
    "Graphic Designer",
    "UI/UX Designer",
  ];

  if (!themeProvider) return null;
  const { theme } = themeProvider;

  const profileImageUrl =
    theme === "dark"
      ? "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png"
      : "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png";

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section
      className={`w-full min-h-screen flex items-center justify-center p-6 ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <article className="flex flex-col md:flex-row items-center justify-between gap-8 w-full container mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-left order-2 md:order-1 max-w-2xl space-y-6">
          {/* Main Heading */}
          <h1
            data-aos="fade-right"
            className={`text-5xl md:text-6xl font-extrabold leading-tight  ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Hello!
            </span>
            <span className="pl-4" data-aos="fade-right" data-aos-delay="150">
              I'm Neath
            </span>
          </h1>

          {/* Animated Subheading */}
          <div
            className={`relative text-2xl md:text-3xl font-medium h-10 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="absolute top-0 left-0 w-full"
            >
              <span className="inline-block min-w-[1ch]">{displayText}</span>
              <span className="ml-1.5 inline-block w-1 h-8 bg-[#00ff99] animate-blink align-middle"></span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className={`text-lg md:text-xl leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <span className="font-medium">Aspiring front-end developer</span>{" "}
            with expertise in modern web technologies, responsive design, and
            performance optimization. Let's collaborate to bring your digital
            vision to life!
          </p>

          {/* Social Icons */}
          <div
            className=" flex justify-center md:justify-start"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <SocialIcons />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center md:justify-start">
            <Buttons />
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          className="order-1 md:order-2 relative flex justify-center"
        >
          <div
            className={`absolute inset-0 rounded-full blur-md opacity-70 transform scale-90 
      ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#00ff99]/40 via-[#0099ff]/30 to-[#00ff99]/40"
          : "bg-gradient-to-r from-[#00ff99]/30 via-[#0099ff]/20 to-[#00ff99]/30"
      } animate-pulse-slow`}
            aria-hidden="true"
          />
          <div
            className={`relative rounded-full p-1 overflow-hidden transition-all duration-300 
      ${
        theme === "dark"
          ? "shadow-[0_0_25px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.9)]"
          : "shadow-[0_0_20px_rgba(0,255,153,0.4)] hover:shadow-[0_0_35px_rgba(0,255,153,0.7)]"
      } animate-bounce-slow`}
          >
            <div
              className={`rounded-full animate-spin-slow relative
        ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#00ff99] via-[#0099ff] to-[#00ff99]"
            : "bg-gradient-to-r from-[#00ff99] via-[#0099ff] to-[#00ff99]"
        } p-1`}
            >
              <div
                className={`bg-${
                  theme === "dark" ? "[#1c1c22]" : "white"
                } rounded-full p-1 overflow-hidden`}
              >
                <img
                  src={profileImageUrl}
                  alt="Neath's profile"
                  className="rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
