import { useContext } from "react";
import { ThemeContext } from "../../App/Ui/ThemeContext";

interface ProgressBarProps {
  progress: number;
  label: string;
  icon?: React.ReactNode;
}

const ProgressBar = ({ progress, label, icon }: ProgressBarProps) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div className="w-full mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span
            className={`font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {label}
          </span>
        </div>
        <span className="text-sm text-[#00ff99]">{progress}%</span>
      </div>

      <div
        className={`h-3 rounded-full overflow-hidden ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out bg-[#00ff99] shadow-lg"
          style={{ width: `${progress}%` }}
        >
          <div
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              bg-gradient-to-r from-[#00ff99]/40 to-[#00ff99]/80 blur-sm`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
