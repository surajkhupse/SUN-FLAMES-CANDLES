import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-solid py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Aura. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-gray-500 dark:text-gray-400 transition-colors hover-whatsapp"
            >
              <i className="fab fa-whatsapp fa-lg" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 dark:text-gray-400 transition-colors hover-ig-gradient"
            >
              <i className="fab fa-instagram fa-lg" />
            </a>
          </div>

          <div className="flex gap-4 text-sm">
            <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors" href="#">Privacy Policy</a>
            <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
