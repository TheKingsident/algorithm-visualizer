import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-gray-900 p-4 pt-20 md:p-6 rounded-lg">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <span className="text-gray-400 text-sm">
        Proudly made in  <span role="img" aria-label="Nigerian flag">🇳🇬</span>  by Kingsley Usa
      </span>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://github.com/TheKingsident" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/thekingsident/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <FaLinkedin size={20} />
        </a>
        <a href="https://x.com/CtrlAlt_Byte/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <FaTwitter size={20} />
        </a>
        
      </div>
    </div>
  </footer>
  )
}

export default Footer;