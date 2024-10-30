// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-24 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <a
            href="/company"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            運営会社
          </a>
          <a
            href="/terms"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            利用規約
          </a>
          <a
            href="/privacy"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            プライバシーポリシー
          </a>
          <a
            href="/contact"
            className="text-sm hover:text-white transition-colors duration-200"
          >
            お問い合わせ
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Writech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
