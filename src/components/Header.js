import { FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-7xl font-semibold tracking-tight text-white sm:text-6xl">
            Algorithm Visualizer
          </p>

          {/* GitHub Icon */}
          <a
            href="https://github.com/TheKingsident/algorithm-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-gray-400 hover:text-gray-300"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
