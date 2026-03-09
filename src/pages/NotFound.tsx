import { Link } from "react-router";
import { useState } from "react";

export default function NotFound() {

  const [glitch, setGlitch] = useState(false);

  const handleHover = () => {
    setGlitch(true);

    setTimeout(() => {
      setGlitch(false);
    }, 400);
  };

  return (
<div className="h-screen flex flex-col items-center justify-center 
bg-gradient-to-br from-black via-gray-900 to-black 
text-green-400 overflow-hidden relative">

  {/* background */}
  <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse z-0"></div>

  {/* content */}
  <div className="flex flex-col items-center relative z-10">

    <h1
      onMouseEnter={handleHover}
      className={`text-8xl font-bold tracking-widest transition-all duration-300
      ${glitch ? "scale-110 text-green-300" : ""}
      animate-bounce`}
    >
      404
    </h1>

    <p className="mt-6 text-2xl text-green-300 animate-pulse">
      Lost in the digital void
    </p>

    <p className="mt-2 text-green-500 text-center max-w-md">
      The page you're looking for doesn't exist or has been moved.
    </p>

    <Link
      to="/"
      className="mt-8 px-8 py-3 rounded-xl border border-green-400
      hover:bg-green-400 hover:text-black
      hover:scale-110 transition-all duration-300
      shadow-lg shadow-green-500/30 cursor-pointer"
    >
      Return Home
    </Link>

  </div>
</div>
  );
}