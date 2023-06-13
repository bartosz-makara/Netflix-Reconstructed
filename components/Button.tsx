import { PlayIcon } from "@heroicons/react/outline";
import { FaPlay } from "react-icons/fa";

interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

function Button({ title, onClick, width, loading, padding, noIcon }: Props) {
  return (
    <a
      href="#_"
      className="group relative inline-flex items-center justify-center overflow-hidden  p-0.5 font-bold"
      onClick={onClick}
    >
      <span className="absolute h-full w-full bg-gradient-to-br from-blue-700 via-[#ff5478] to-red-500 group-hover:from-blue-700 group-hover:via-[#ff5478] group-hover:to-red-500"></span>
      <span className="flex items-center duration-400 relative  bg-gray-900 px-6 py-3 transition-all ease-out group-hover:bg-opacity-0">
        <FaPlay className="h-6 w-6" />
        <span className="relative text-white">
          {loading ? "Loading..." : title}
        </span>
      </span>
    </a>
  );
}

export default Button;
