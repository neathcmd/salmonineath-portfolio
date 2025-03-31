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
      id="hero"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <article className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
        {/* Text Section - Improved responsive widths */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
          {/* Main Heading */}
          <h1
            data-aos="fade-right"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Hello!
            </span>
            <span
              className="pl-2 sm:pl-4"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              I'm Neath
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>

          {/* Animated Subheading - Better mobile sizing */}
          <div className="relative text-xl sm:text-2xl md:text-3xl font-medium h-8 sm:h-10">
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="absolute top-0 left-0 w-full"
            >
              <span className="inline-block min-w-[1ch]">{displayText}</span>
              <span className="ml-1 sm:ml-1.5 inline-block w-0.5 sm:w-1 h-6 sm:h-8 bg-[#00ff99] animate-blink align-middle"></span>
            </h2>
          </div>

          {/* Description Paragraph - Better mobile readability */}
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-base sm:text-lg leading-relaxed"
          >
            <span className="font-medium">
              Front-end developer skilled in modern web tech,
            </span>{" "}
            responsive design, and performance optimization. Let&apos;s build
            something amazing together!
          </p>

          {/* Social Icons - Better alignment */}
          <div
            className="flex justify-center md:justify-start mt-4 sm:mt-6"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <SocialIcons />
          </div>

          {/* Action Buttons - Better spacing */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <Buttons />
          </div>
        </div>

        {/* Image Section - Improved responsive sizing */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center w-full md:w-1/2"
        >
          <div
            className={`absolute rounded-full blur-md opacity-70 transform scale-90 
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
                  ? "shadow-[0_0_15px_rgba(0,255,153,0.6)] hover:shadow-[0_0_25px_rgba(0,255,153,0.9)]"
                  : "shadow-[0_0_10px_rgba(0,255,153,0.4)] hover:shadow-[0_0_20px_rgba(0,255,153,0.7)]"
              } animate-bounce-slow w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]`}
          >
            <div
              className={`rounded-full animate-spin-slow relative
                ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                    : "bg-gradient-to-r from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                } p-1 w-full h-full`}
            >
              <div
                className={`bg-${
                  theme === "dark" ? "[#1c1c22]" : "white"
                } rounded-full p-1 overflow-hidden w-full h-full`}
              >
                <img
                  src={profileImageUrl}
                  alt="Neath's profile"
                  className="rounded-full w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
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
